const path = require("path");

if (!process.env.VERCEL) {
  require("dotenv").config({
    path: path.join(__dirname, "../apps/api/.env"),
  });
}

const {
  isSmtpConfigured,
  notifyNewLead,
} = require("../apps/api/src/mailer");
const { addLead } = require("../apps/api/src/leadsStore");

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

  if (!addLead(normalizedEmail)) {
    return res.status(200).json({
      success: true,
      alreadyRegistered: true,
      emailSent: false,
      message:
        "Vous êtes déjà inscrit. Vous recevrez bien les informations concernant le lancement de TADARA.",
    });
  }

  if (!isSmtpConfigured()) {
    return res.status(500).json({
      success: false,
      message: "L'envoi d'email n'est pas encore configuré.",
    });
  }

  try {
    const mailResult = await notifyNewLead({
      email: normalizedEmail,
      source: typeof source === "string" ? source : null,
    });
    const emailSent = Boolean(mailResult.emailSent);

    return res.status(201).json({
      success: true,
      alreadyRegistered: false,
      emailSent,
      message:
        "Vous serez informé en priorité de l'ouverture de l'abonnement TADARA.",
      lead: {
        email: normalizedEmail,
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
