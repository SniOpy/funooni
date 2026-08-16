const nodemailer = require("nodemailer");
const { buildConfirmationEmail } = require("./emails/confirmationEmail");
const { buildAdminLeadEmail } = require("./emails/adminLeadEmail");

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function getFromAddress() {
  return `"Tadara" <${process.env.SMTP_USER}>`;
}

function getReplyToAddress() {
  const adminEmail = getAdminEmail();
  return adminEmail ? `"Tadara" <${adminEmail}>` : undefined;
}

function getAdminEmail() {
  return (process.env.ADMIN_EMAIL || process.env.SMTP_USER || "")
    .trim()
    .toLowerCase();
}

async function sendConfirmationEmail(email) {
  if (!isSmtpConfigured()) {
    console.warn(
      "[mailer] SMTP non configuré — email de confirmation non envoyé."
    );
    return { sent: false, reason: "smtp_not_configured" };
  }

  const transporter = createTransporter();
  const { subject, text, html } = buildConfirmationEmail({ email });

  await transporter.sendMail({
    from: getFromAddress(),
    to: email,
    replyTo: getReplyToAddress(),
    subject,
    text,
    html,
  });

  return { sent: true };
}

async function sendAdminLeadEmail({ email, source }) {
  if (!isSmtpConfigured()) {
    console.warn(
      "[mailer] SMTP non configuré — notification admin non envoyée."
    );
    return { sent: false, reason: "smtp_not_configured" };
  }

  const to = getAdminEmail();
  if (!to) {
    console.warn("[mailer] Aucune adresse admin configurée.");
    return { sent: false, reason: "admin_email_missing" };
  }

  const transporter = createTransporter();
  const { subject, text, html } = buildAdminLeadEmail({ email, source });

  await transporter.sendMail({
    from: getFromAddress(),
    to,
    replyTo: email,
    subject,
    text,
    html,
  });

  return { sent: true };
}

async function notifyNewLead({ email, source }) {
  const visitorEmail = email.trim().toLowerCase();
  const adminEmail = getAdminEmail();
  const sameInbox = Boolean(adminEmail) && visitorEmail === adminEmail;

  if (!sameInbox) {
    await sendAdminLeadEmail({ email: visitorEmail, source });
  }

  const confirmResult = await sendConfirmationEmail(visitorEmail);
  return { emailSent: Boolean(confirmResult.sent), sameInbox };
}

module.exports = {
  isSmtpConfigured,
  sendConfirmationEmail,
  sendAdminLeadEmail,
  notifyNewLead,
};
