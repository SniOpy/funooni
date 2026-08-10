const nodemailer = require("nodemailer");
const { buildConfirmationEmail } = require("./emails/confirmationEmail");

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

async function sendConfirmationEmail(email) {
  if (!isSmtpConfigured()) {
    console.warn(
      "[mailer] SMTP non configuré — email de confirmation non envoyé."
    );
    return { sent: false, reason: "smtp_not_configured" };
  }

  const transporter = createTransporter();
  const { subject, text, html } = buildConfirmationEmail({ email });
  const from =
    process.env.SMTP_FROM ||
    `"Tadara" <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from,
    to: email,
    subject,
    text,
    html,
  });

  return { sent: true };
}

module.exports = {
  isSmtpConfigured,
  sendConfirmationEmail,
};
