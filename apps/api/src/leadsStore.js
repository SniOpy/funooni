const fs = require("fs");
const path = require("path");

const storeFile = process.env.VERCEL
  ? "/tmp/funooni-leads-v2.json"
  : path.join(__dirname, "..", "data", "leads.json");

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function readStore() {
  if (globalThis.__funooniLeads instanceof Set) {
    return globalThis.__funooniLeads;
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(storeFile, "utf8"));
    globalThis.__funooniLeads = new Set(
      Array.isArray(parsed) ? parsed.map(normalizeEmail) : []
    );
  } catch {
    globalThis.__funooniLeads = new Set();
  }

  return globalThis.__funooniLeads;
}

function writeStore() {
  fs.mkdirSync(path.dirname(storeFile), { recursive: true });
  fs.writeFileSync(storeFile, JSON.stringify([...readStore()]));
}

function hasLead(email) {
  return readStore().has(normalizeEmail(email));
}

function addLead(email) {
  const normalized = normalizeEmail(email);
  const store = readStore();

  if (store.has(normalized)) {
    return false;
  }

  store.add(normalized);
  writeStore();
  return true;
}

function clearLeads() {
  const removed = readStore().size;
  globalThis.__funooniLeads = new Set();

  try {
    fs.unlinkSync(storeFile);
  } catch {
    // Fichier absent ou déjà supprimé.
  }

  return removed;
}

function getLeadCount() {
  return readStore().size;
}

module.exports = {
  hasLead,
  addLead,
  clearLeads,
  getLeadCount,
};
