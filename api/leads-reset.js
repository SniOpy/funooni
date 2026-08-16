const path = require("path");

if (!process.env.VERCEL) {
  require("dotenv").config({
    path: path.join(__dirname, "../apps/api/.env"),
  });
}

const { clearLeads, getLeadCount } = require("../apps/api/src/leadsStore");

module.exports = async (req, res) => {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).json({
      success: false,
      message: "Méthode non autorisée.",
    });
  }

  const secret = process.env.LEADS_RESET_SECRET;
  if (!secret) {
    return res.status(503).json({
      success: false,
      message: "Réinitialisation non configurée.",
    });
  }

  const provided =
    req.headers["x-reset-secret"] ||
    req.query.secret ||
    req.body?.secret;

  if (provided !== secret) {
    return res.status(401).json({
      success: false,
      message: "Non autorisé.",
    });
  }

  const removed = clearLeads();

  return res.status(200).json({
    success: true,
    removed,
    remaining: getLeadCount(),
    message: `${removed} inscription(s) supprimée(s).`,
  });
};
