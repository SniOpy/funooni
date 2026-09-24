export function formatParisDateTime(isoDate) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(isoDate))
}

export function formatChartDay(ymd) {
  const [year, month, day] = ymd.split("-").map(Number)
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
  }).format(new Date(year, month - 1, day))
}

export function displayNameFromEmail(email, fullName) {
  if (fullName && fullName.trim()) {
    return fullName.trim()
  }
  const localPart = String(email || "").split("@")[0] || ""
  return localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

export function initialsFromName(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
}

export function downloadCsv(fileName, header, rows) {
  const csvContent = [header, ...rows].join("\n")
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const fileUrl = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = fileUrl
  link.download = fileName
  link.click()
  URL.revokeObjectURL(fileUrl)
}

export const AVATAR_COLORS = [
  "#4F46E5",
  "#7C3AED",
  "#0EA5E9",
  "#10B981",
  "#F59E0B",
  "#EC4899",
]
