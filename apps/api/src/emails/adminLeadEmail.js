function buildAdminLeadEmail({ email, source }) {
  const subject = "Nouvelle inscription Tadara";
  const sourceLabel = source || "non précisée";
  const registeredAt = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
  });

  const text = [
    "Nouvelle inscription sur la landing Tadara.",
    "",
    `Email : ${email}`,
    `Source : ${sourceLabel}`,
    `Date : ${registeredAt}`,
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;background-color:#F4EFE4;color:#2B1712;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;">
          <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#A9825A;">
            Tadara
          </p>
          <h1 style="margin:0 0 20px;font-size:22px;line-height:1.3;color:#2B1712;">
            Nouvelle inscription
          </h1>
          <p style="margin:0 0 12px;font-size:15px;line-height:1.5;color:#4B3A34;">
            <strong>Email :</strong>
            <a href="mailto:${email}" style="color:#2B1712;">${email}</a>
          </p>
          <p style="margin:0 0 12px;font-size:15px;line-height:1.5;color:#4B3A34;">
            <strong>Source :</strong> ${sourceLabel}
          </p>
          <p style="margin:0;font-size:15px;line-height:1.5;color:#4B3A34;">
            <strong>Date :</strong> ${registeredAt}
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim();

  return { subject, text, html };
}

module.exports = {
  buildAdminLeadEmail,
};
