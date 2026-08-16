const API_URL = (
  import.meta.env.PROD
    ? ""
    : import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

export async function submitLead({ email, source }) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, source }),
    });
  } catch {
    throw new Error(
      "Impossible d'envoyer l'inscription pour le moment. Merci de réessayer."
    );
  }

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.success) {
    const error = new Error(
      data?.message || "Une erreur est survenue. Merci de réessayer."
    );
    error.status = response.status;
    throw error;
  }

  return data;
}
