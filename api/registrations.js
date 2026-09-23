const path = require("path");

if (!process.env.VERCEL) {
  require("dotenv").config({
    path: path.join(__dirname, "../apps/api/.env"),
  });
}

const { listRegistrations } = require("../apps/api/src/listRegistrations");
const {
  isValidAdminPassword,
  getAdminPasswordFromRequest,
} = require("../apps/api/src/adminAuth");

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, x-admin-password"
  );
}

module.exports = async (req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  }

  const adminPassword = getAdminPasswordFromRequest(req);

  if (!process.env.ADMIN_DASHBOARD_PASSWORD) {
    return res.status(503).json({
      success: false,
      message: "Le dashboard admin n'est pas encore configuré.",
    });
  }

  if (!isValidAdminPassword(adminPassword)) {
    return res.status(401).json({
      success: false,
      message: "Mot de passe incorrect.",
    });
  }

  try {
    const { registrations, stats } = await listRegistrations();

    return res.status(200).json({
      success: true,
      registrations,
      stats,
    });
  } catch (error) {
    console.error("Erreur lors de la lecture des inscriptions :", error);

    return res.status(500).json({
      success: false,
      message: "Impossible de charger les inscriptions.",
    });
  }
};
