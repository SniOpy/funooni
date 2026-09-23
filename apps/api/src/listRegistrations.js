const { getSupabaseClient } = require("./createRegistration");

const PARIS_TIME_ZONE = "Europe/Paris";

function formatParisYmd(date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PARIS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function shiftParisYmd(ymd, dayOffset) {
  const [year, month, day] = ymd.split("-").map(Number);
  const shifted = new Date(Date.UTC(year, month - 1, day + dayOffset));
  return shifted.toISOString().slice(0, 10);
}

function getParisMondayYmd(now) {
  const todayYmd = formatParisYmd(now);
  const weekdayShort = new Intl.DateTimeFormat("en-US", {
    timeZone: PARIS_TIME_ZONE,
    weekday: "short",
  }).format(now);

  const daysSinceMonday = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  }[weekdayShort];

  return shiftParisYmd(todayYmd, -(daysSinceMonday || 0));
}

function countInRange(countByDay, startYmd, endYmd) {
  let total = 0;
  for (const [dayYmd, count] of Object.entries(countByDay)) {
    if (dayYmd >= startYmd && dayYmd <= endYmd) {
      total += count;
    }
  }
  return total;
}

function percentChange(currentCount, previousCount) {
  if (previousCount === 0) {
    return currentCount === 0 ? 0 : 100;
  }
  return Math.round(((currentCount - previousCount) / previousCount) * 100);
}

function buildRegistrationStats(registrations, now = new Date()) {
  const todayYmd = formatParisYmd(now);
  const yesterdayYmd = shiftParisYmd(todayYmd, -1);
  const thisMonthPrefix = todayYmd.slice(0, 7);
  const lastMonthPrefix = shiftParisYmd(todayYmd, -32).slice(0, 7);
  const mondayYmd = getParisMondayYmd(now);
  const previousMondayYmd = shiftParisYmd(mondayYmd, -7);
  const previousSundayYmd = shiftParisYmd(mondayYmd, -1);

  let todayCount = 0;
  let yesterdayCount = 0;
  let thisWeekCount = 0;
  let thisMonthCount = 0;
  let lastMonthCount = 0;
  const countByDay = {};

  for (const registration of registrations) {
    const registrationYmd = formatParisYmd(new Date(registration.created_at));
    countByDay[registrationYmd] = (countByDay[registrationYmd] || 0) + 1;

    if (registrationYmd === todayYmd) todayCount += 1;
    if (registrationYmd === yesterdayYmd) yesterdayCount += 1;
    if (registrationYmd >= mondayYmd && registrationYmd <= todayYmd) {
      thisWeekCount += 1;
    }
    if (registrationYmd.startsWith(thisMonthPrefix)) thisMonthCount += 1;
    if (registrationYmd.startsWith(lastMonthPrefix)) lastMonthCount += 1;
  }

  const previousWeekCount = countInRange(
    countByDay,
    previousMondayYmd,
    previousSundayYmd
  );

  const last30Days = [];
  for (let dayOffset = 29; dayOffset >= 0; dayOffset -= 1) {
    const dayYmd = shiftParisYmd(todayYmd, -dayOffset);
    last30Days.push({
      date: dayYmd,
      count: countByDay[dayYmd] || 0,
    });
  }

  return {
    totalCount: registrations.length,
    todayCount,
    thisWeekCount,
    thisMonthCount,
    last30Days,
    todayChangePercent: percentChange(todayCount, yesterdayCount),
    weekChangePercent: percentChange(thisWeekCount, previousWeekCount),
    monthChangePercent: percentChange(thisMonthCount, lastMonthCount),
  };
}

async function listRegistrations() {
  const supabaseClient = getSupabaseClient();

  const { data: registrations, error } = await supabaseClient
    .from("registrations")
    .select("id, email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  const registrationList = registrations || [];

  return {
    registrations: registrationList,
    stats: buildRegistrationStats(registrationList),
  };
}

module.exports = {
  listRegistrations,
  buildRegistrationStats,
};
