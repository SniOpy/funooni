const { getSupabaseClient } = require("./createRegistration");
const { buildRegistrationStats } = require("./listRegistrations");
const { parseEmailList, classifyEmails } = require("./parseEmailList");

async function listSpecialMembers() {
  const supabaseClient = getSupabaseClient();

  const { data: specialMembers, error } = await supabaseClient
    .from("special_members")
    .select("id, email, full_name, phone, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  const memberList = specialMembers || [];

  return {
    specialMembers: memberList,
    stats: buildRegistrationStats(memberList),
  };
}

async function createSpecialMembers({ emailsText, fullName, phone }) {
  const parsedEmails = parseEmailList(emailsText);
  const { validEmails, invalidEmails } = classifyEmails(parsedEmails);

  if (validEmails.length === 0) {
    return {
      addedCount: 0,
      alreadyRegisteredCount: 0,
      invalidEmails,
      addedMembers: [],
    };
  }

  const supabaseClient = getSupabaseClient();

  const { data: existingMembers, error: existingError } = await supabaseClient
    .from("special_members")
    .select("email")
    .in("email", validEmails);

  if (existingError) {
    throw existingError;
  }

  const existingEmails = new Set(
    (existingMembers || []).map((member) => member.email)
  );
  const newEmails = validEmails.filter((email) => !existingEmails.has(email));

  const trimmedName =
    typeof fullName === "string" && fullName.trim() ? fullName.trim() : null;
  const trimmedPhone =
    typeof phone === "string" && phone.trim() ? phone.trim() : null;
  const applyOptionalFields = newEmails.length === 1;

  const rowsToInsert = newEmails.map((email) => ({
    email,
    full_name: applyOptionalFields ? trimmedName : null,
    phone: applyOptionalFields ? trimmedPhone : null,
  }));

  let addedMembers = [];

  if (rowsToInsert.length > 0) {
    const { data: insertedMembers, error: insertError } = await supabaseClient
      .from("special_members")
      .insert(rowsToInsert)
      .select("id, email, full_name, phone, created_at");

    if (insertError) {
      throw insertError;
    }

    addedMembers = insertedMembers || [];
  }

  return {
    addedCount: addedMembers.length,
    alreadyRegisteredCount: validEmails.length - newEmails.length,
    invalidEmails,
    addedMembers,
  };
}

module.exports = {
  listSpecialMembers,
  createSpecialMembers,
};
