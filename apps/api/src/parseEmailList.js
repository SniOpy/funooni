const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseEmailList(emailsText) {
  if (typeof emailsText !== "string") {
    return [];
  }

  const uniqueEmails = [];
  const seenEmails = new Set();

  for (const rawEmail of emailsText.split(/[,;\n]+/)) {
    const normalizedEmail = rawEmail.trim().toLowerCase();
    if (!normalizedEmail || seenEmails.has(normalizedEmail)) {
      continue;
    }
    seenEmails.add(normalizedEmail);
    uniqueEmails.push(normalizedEmail);
  }

  return uniqueEmails;
}

function classifyEmails(emailList) {
  const validEmails = [];
  const invalidEmails = [];

  for (const email of emailList) {
    if (EMAIL_REGEX.test(email)) {
      validEmails.push(email);
    } else {
      invalidEmails.push(email);
    }
  }

  return { validEmails, invalidEmails };
}

module.exports = {
  EMAIL_REGEX,
  parseEmailList,
  classifyEmails,
};
