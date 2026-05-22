const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://tadara.funooni.fr",
  "https://funooni.fr"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Funooni API is running");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Funooni API is healthy"
  });
});

app.post("/api/leads", (req, res) => {
  const { source, name, phone, email, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Le nom et le téléphone sont obligatoires."
    });
  }

  console.log("Nouveau lead reçu :", {
    source,
    name,
    phone,
    email,
    message
  });

  return res.status(200).json({
    success: true,
    message: "Votre demande a bien été envoyée."
  });
});

app.listen(PORT, () => {
  console.log(`Funooni API is running on port ${PORT}`);
});