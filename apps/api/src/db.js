const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const dataDir = path.join(__dirname, "..", "data");
const dbPath = process.env.DATABASE_PATH || path.join(dataDir, "funooni.sqlite");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL COLLATE NOCASE,
    source TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
`);

function createLead({ email, source }) {
  const insert = db.prepare(`
    INSERT INTO leads (email, source)
    VALUES (@email, @source)
  `);

  const result = insert.run({
    email: email.trim().toLowerCase(),
    source: source || null,
  });

  return {
    id: result.lastInsertRowid,
    email: email.trim().toLowerCase(),
    source: source || null,
  };
}

function findLeadByEmail(email) {
  return db
    .prepare(`SELECT id, email, source, created_at FROM leads WHERE email = ?`)
    .get(email.trim().toLowerCase());
}

module.exports = {
  db,
  createLead,
  findLeadByEmail,
};
