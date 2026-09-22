const crypto = require("crypto");

function isValidAdminPassword(providedPassword) {
  const expectedPassword = process.env.ADMIN_DASHBOARD_PASSWORD;

  if (!expectedPassword || typeof providedPassword !== "string") {
    return false;
  }

  const providedBuffer = Buffer.from(providedPassword);
  const expectedBuffer = Buffer.from(expectedPassword);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(providedBuffer, expectedBuffer);
}

function getAdminPasswordFromRequest(req) {
  const headerPassword = req.headers["x-admin-password"];

  if (typeof headerPassword === "string" && headerPassword) {
    return headerPassword;
  }

  if (typeof req.body?.password === "string") {
    return req.body.password;
  }

  return "";
}

module.exports = {
  isValidAdminPassword,
  getAdminPasswordFromRequest,
};
