const { createClient } = require("@supabase/supabase-js");

const POSTGRES_UNIQUE_VIOLATION = "23505";

function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Supabase n'est pas configuré (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function createRegistration(normalizedEmail) {
  const supabaseClient = getSupabaseClient();

  const { data: registration, error } = await supabaseClient
    .from("registrations")
    .insert({ email: normalizedEmail })
    .select("id, email, created_at")
    .single();

  if (error?.code === POSTGRES_UNIQUE_VIOLATION) {
    return { isEmailAlreadyRegistered: true };
  }

  if (error) {
    throw error;
  }

  return {
    isEmailAlreadyRegistered: false,
    registration,
  };
}

module.exports = {
  getSupabaseClient,
  createRegistration,
};
