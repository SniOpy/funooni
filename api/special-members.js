const path = require("path");

if (!process.env.VERCEL) {
  require("dotenv").config({
    path: path.join(__dirname, "../apps/api/.env"),
  });
}

const {
  listSpecialMembers,
  createSpecialMembers,
} = require("../apps/api/src/specialMembers");
const {
  isValidAdminPassword,
  getAdminPasswordFromRequest,
} = require("../apps/api/src/adminAuth");

function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, x-admin-password"
  );
}

function unauthorized(res, req) {
  if (!process.env.ADMIN_DASHBOARD_PASSWORD) {
    res.status(503).json({
      success: false,
      message: "Le dashboard admin n'est pas encore configuré.",
    });
    return true;
  }

  const adminPassword = getAdminPasswordFromRequest(req);
  if (!isValidAdminPassword(adminPassword)) {
    res.status(401).json({
      success: false,
      message: "Mot de passe incorrect.",
    });
    return true;
  }

  return false;
}

module.exports = async (req, res) => {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (unauthorized(res, req)) {
    return;
  }

  try {
    if (req.method === "GET") {
      const { specialMembers, stats } = await listSpecialMembers();
      return res.status(200).json({
        success: true,
        specialMembers,
        stats,
      });
    }

    if (req.method === "POST") {
      const createResult = await createSpecialMembers({
        emailsText: req.body?.emailsText,
        fullName: req.body?.fullName,
        phone: req.body?.phone,
      });

      return res.status(201).json({
        success: true,
        ...createResult,
      });
    }

    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  } catch (error) {
    console.error("Erreur groupe spécial :", error);

    return res.status(500).json({
      success: false,
      message: "Impossible de traiter le groupe spécial.",
    });
  }
};
