const INSTAGRAM_URL = "https://www.instagram.com/funooni.editions/";
const INSTAGRAM_ICON_URL =
  `${(process.env.SITE_URL || "https://funooni.vercel.app").replace(/\/$/, "")}/images/email/instagram.png`;

function buildConfirmationEmail({ email }) {
  const subject = "Bienvenue dans l'aventure Tadara ! 🎉";
  const preheader =
    "Merci de rejoindre les coulisses d'une nouvelle façon de raconter l'Histoire à nos enfants.";

  const text = [
    "Bonjour,",
    "",
    "Un grand merci pour votre intérêt et bienvenue dans les coulisses de Tadara !",
    "",
    "Si vous êtes ici, c'est sans doute que vous partagez cette même envie : offrir à nos enfants de 8 à 12 ans une alternative poétique et captivante aux écrans. Une invitation à ralentir, à toucher du beau papier, et à découvrir comment la grande Histoire arabo-musulmane résonne encore dans leur quotidien d'aujourd'hui.",
    "",
    "Ce qui vous attend très prochainement...",
    "Tadara est actuellement en cours de préparation. Chaque détail est façonné avec un soin immense : de la sélection d'un papier noble au toucher, jusqu'à l'écriture de récits captivants, en passant par de superbes surprises illustrées à glisser dans l'enveloppe.",
    "",
    "Comme vous faites partie des toutes premières personnes à nous rejoindre, vous serez aux premières loges :",
    "",
    "🎁 L'accès prioritaire au lancement : Dès que les premières enveloppes seront prêtes à prendre la route, vous serez averti(e) en priorité pour pouvoir inscrire votre enfant (ou offrir un abonnement à un proche).",
    "",
    "💬 Une petite question pour commencer...",
    "Tadara est un projet qui grandit grâce à sa communauté. Si vous avez 30 secondes, répondez simplement à cet e-mail pour me dire : pour qui avez-vous hâte de faire découvrir Tadara ? (Un fils, une fille, des neveux, des petits-enfants ?)",
    "",
    "Je lis et je réponds personnellement à chaque message !",
    "",
    "En attendant l'ouverture officielle, je vous donne rendez-vous sur Instagram pour suivre l'avancée de l'aventure au jour le jour.",
    `Instagram Tadara : ${INSTAGRAM_URL}`,
    "",
    "À très vite dans votre boîte aux lettres (numérique... pour le moment !),",
    "",
    "Imen",
    "La Team Tadara",
    "",
    "🌱 Nourrir la curiosité, célébrer la transmission.",
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
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      ${preheader}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#E8F0F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#F4EFE4;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:36px 32px 20px;text-align:center;">
                <p style="margin:0 0 12px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#A9825A;">
                  Tadara
                </p>
                <h1 style="margin:0;font-size:26px;line-height:1.25;color:#2B1712;">
                  Bienvenue dans l'aventure Tadara&nbsp;! 🎉
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px;text-align:left;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Bonjour,
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Un grand merci pour votre intérêt et bienvenue dans les coulisses de Tadara&nbsp;!
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Si vous êtes ici, c'est sans doute que vous partagez cette même envie&nbsp;: offrir à nos enfants de 8 à 12 ans une alternative poétique et captivante aux écrans. Une invitation à ralentir, à toucher du beau papier, et à découvrir comment la grande Histoire arabo-musulmane résonne encore dans leur quotidien d'aujourd'hui.
                </p>
                <p style="margin:24px 0 8px;font-size:17px;line-height:1.4;color:#2B1712;font-weight:bold;">
                  Ce qui vous attend très prochainement...
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Tadara est actuellement en cours de préparation. Chaque détail est façonné avec un soin immense&nbsp;: de la sélection d'un papier noble au toucher, jusqu'à l'écriture de récits captivants, en passant par de superbes surprises illustrées à glisser dans l'enveloppe.
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Comme vous faites partie des toutes premières personnes à nous rejoindre, vous serez aux premières loges&nbsp;:
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  🎁 <strong style="color:#2B1712;">L'accès prioritaire au lancement&nbsp;:</strong> Dès que les premières enveloppes seront prêtes à prendre la route, vous serez averti(e) en priorité pour pouvoir inscrire votre enfant (ou offrir un abonnement à un proche).
                </p>
                <p style="margin:24px 0 8px;font-size:17px;line-height:1.4;color:#2B1712;font-weight:bold;">
                  💬 Une petite question pour commencer...
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Tadara est un projet qui grandit grâce à sa communauté. Si vous avez 30 secondes, répondez simplement à cet e-mail pour me dire&nbsp;: pour qui avez-vous hâte de faire découvrir Tadara&nbsp;? (Un fils, une fille, des neveux, des petits-enfants&nbsp;?)
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  Je lis et je réponds personnellement à chaque message&nbsp;!
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  En attendant l'ouverture officielle, je vous donne rendez-vous sur Instagram pour suivre l'avancée de l'aventure au jour le jour.
                </p>
                <p style="margin:8px 0 20px;text-align:left;">
                  <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                    <img src="${INSTAGRAM_ICON_URL}" alt="Instagram Tadara" width="40" height="40" style="display:inline-block;border:0;outline:none;text-decoration:none;width:40px;height:40px;" />
                  </a>
                </p>
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#4B3A34;">
                  À très vite dans votre boîte aux lettres (numérique... pour le moment&nbsp;!),
                </p>
                <p style="margin:0;font-size:16px;line-height:1.6;color:#4B3A34;">
                  <strong style="color:#2B1712;">Imen</strong><br />
                  La Team Tadara
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid rgba(43,23,18,0.12);text-align:center;">
                <p style="margin:0;font-size:13px;line-height:1.5;color:#756A63;">
                  🌱 Nourrir la curiosité, célébrer la transmission.
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

  return { subject, text, html, email };
}

module.exports = {
  buildConfirmationEmail,
};
