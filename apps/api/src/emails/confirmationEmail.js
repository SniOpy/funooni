function buildConfirmationEmail({ email }) {
  const subject = "Tadara — nous avons bien reçu votre email";

  const text = [
    "Bonjour,",
    "",
    "Merci de votre intérêt pour Tadara.",
    "Nous avons bien reçu votre adresse email et vous avez été ajouté(e) à notre liste.",
    "",
    "Vous serez informé(e) en priorité lors de l’ouverture des abonnements,",
    "avec une offre privilégiée réservée aux premières familles inscrites.",
    "",
    "À très bientôt,",
    "L’équipe Tadara",
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#E8F0F2;font-family:Arial,Helvetica,sans-serif;color:#2B1712;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#E8F0F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#F4EFE4;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:36px 32px 20px;text-align:center;">
                <p style="margin:0 0 12px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#A9825A;">
                  Tadara
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.2;color:#2B1712;">
                  Email bien reçu
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px;text-align:left;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Bonjour,
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Merci de votre intérêt pour Tadara. Nous confirmons avoir bien reçu
                  votre adresse&nbsp;: <strong style="color:#2B1712;">${email}</strong>.
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Vous serez informé(e) en priorité lors de l’ouverture des abonnements,
                  avec une offre privilégiée réservée aux premières familles inscrites.
                </p>
                <p style="margin:0;font-size:16px;line-height:1.6;color:#4B3A34;">
                  À très bientôt,<br />
                  <strong style="color:#2B1712;">L’équipe Tadara</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid rgba(43,23,18,0.12);text-align:center;">
                <p style="margin:0;font-size:13px;line-height:1.5;color:#756A63;">
                  Une lettre mensuelle pour transmettre aux enfants
                  l’héritage de la civilisation arabo-musulmane.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`.trim();

  return { subject, text, html };
}

module.exports = {
  buildConfirmationEmail,
};
