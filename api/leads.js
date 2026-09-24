const path = require("path");

if (!process.env.VERCEL) {
  require("dotenv").config({
    path: path.join(__dirname, "../apps/api/.env"),
  });
}

const { notifyNewLead } = require("../apps/api/src/mailer");
const { createRegistration } = require("../apps/api/src/createRegistration");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async (req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  }

  const { source, email } = req.body || {};

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: "Une adresse email valide est obligatoire.",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const registrationResult = await createRegistration(
      normalizedEmail,
      typeof source === "string" ? source : null
    );

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
};
