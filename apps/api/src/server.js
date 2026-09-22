const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { notifyNewLead } = require("./mailer");
const { createRegistration } = require("./createRegistration");

const app = express();
const PORT = process.env.PORT || 3000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedOrigins = [
  "http://localhost:5173",
  "https://tadara.funooni.fr",
  "https://funooni.fr",
  "https://funooni.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Funooni API is running");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Funooni API is healthy",
  });
});

app.post("/api/leads", async (req, res) => {
  const { source, email } = req.body || {};

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Une adresse email valide est obligatoire.",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const registrationResult = await createRegistration(normalizedEmail);

    if (registrationResult.isEmailAlreadyRegistered) {
      return res.status(200).json({
        success: true,
        alreadyRegistered: true,
        emailSent: false,
        message: "Cette adresse email est déjà inscrite.",
      });
    }

    let emailSent = false;

    try {
      const mailResult = await notifyNewLead({
        email: normalizedEmail,
        source: typeof source === "string" ? source : null,
      });
      emailSent = Boolean(mailResult.emailSent);
    } catch (mailError) {
      console.error("Erreur lors de l'envoi de l'email :", mailError);
    }

    return res.status(201).json({
      success: true,
      alreadyRegistered: false,
      emailSent,
      message: "Merci, votre inscription a bien été prise en compte.",
      lead: {
        id: registrationResult.registration.id,
        email: registrationResult.registration.email,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du lead :", error);

    return res.status(500).json({
      success: false,
      message: "Une erreur est survenue. Merci de réessayer.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Funooni API is running on port ${PORT}`);
});
