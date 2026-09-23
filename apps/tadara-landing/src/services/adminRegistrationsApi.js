const API_URL = (
  import.meta.env.PROD
    ? ""
    : import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const ADMIN_PASSWORD_STORAGE_KEY = "tadara-admin-password";

export function getStoredAdminPassword() {
  return sessionStorage.getItem(ADMIN_PASSWORD_STORAGE_KEY) || "";
}

export function storeAdminPassword(adminPassword) {
  sessionStorage.setItem(ADMIN_PASSWORD_STORAGE_KEY, adminPassword);
}

export function clearStoredAdminPassword() {
  sessionStorage.removeItem(ADMIN_PASSWORD_STORAGE_KEY);
}

export async function fetchRegistrations(adminPassword) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/registrations`, {
      method: "GET",
      headers: {
        "x-admin-password": adminPassword,
      },
    });
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifie que l'API tourne.");
  }

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    const loadError = new Error(
      data?.message || "Impossible de charger les inscriptions."
    );
    loadError.status = response.status;
    throw loadError;
  }

  return data;
}

async function parseAdminResponse(response, fallbackMessage) {
  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    const loadError = new Error(data?.message || fallbackMessage);
    loadError.status = response.status;
    throw loadError;
  }

  return data;
}

export async function fetchSpecialMembers(adminPassword) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/special-members`, {
      method: "GET",
      headers: {
        "x-admin-password": adminPassword,
      },
    });
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifie que l'API tourne.");
  }

  return parseAdminResponse(response, "Impossible de charger le groupe spécial.");
}

export async function addSpecialMembers(adminPassword, payload) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/special-members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": adminPassword,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Impossible de joindre le serveur. Vérifie que l'API tourne.");
  }

  return parseAdminResponse(response, "Impossible d'ajouter les emails.");
}
