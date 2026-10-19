export const GTM_ID = "GTM-5SCFXJLG"
export const CONSENT_STORAGE_KEY = "tadara-consent"
export const CONSENT_TTL_MS = 1000 * 60 * 60 * 24 * 182

const DEFAULT_PREFERENCES = {
  analytics: false,
  ads: false,
}

let gtmLoaded = false

export function needsGtm(preferences) {
  return Boolean(preferences?.analytics || preferences?.ads)
}

export function readStoredConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== "object") return null
    if (typeof parsed.updatedAt !== "number") return null
    if (Date.now() - parsed.updatedAt > CONSENT_TTL_MS) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY)
      return null
    }

    return {
      analytics: Boolean(parsed.analytics),
      ads: Boolean(parsed.ads),
    }
  } catch {
    return null
  }
}

export function saveConsent(preferences) {
  const next = {
    analytics: Boolean(preferences.analytics),
    ads: Boolean(preferences.ads),
    updatedAt: Date.now(),
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next))
  return {
    analytics: next.analytics,
    ads: next.ads,
  }
}

export function updateConsent(preferences) {
  const analyticsGranted = Boolean(preferences?.analytics)
  const adsGranted = Boolean(preferences?.ads)

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: adsGranted ? "granted" : "denied",
      ad_user_data: adsGranted ? "granted" : "denied",
      ad_personalization: adsGranted ? "granted" : "denied",
    })
  }
}

export function loadGtm(id = GTM_ID) {
  if (gtmLoaded || typeof document === "undefined") return
  if (document.getElementById("gtm-script")) {
    gtmLoaded = true
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  })

  const script = document.createElement("script")
  script.id = "gtm-script"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`
  document.head.appendChild(script)
  gtmLoaded = true
}

export function applyConsent(preferences) {
  const next = {
    analytics: Boolean(preferences?.analytics),
    ads: Boolean(preferences?.ads),
  }

  saveConsent(next)
  updateConsent(next)

  if (needsGtm(next)) {
    loadGtm()
  }
}

export function acceptAllConsent() {
  applyConsent({ analytics: true, ads: true })
}

export function refuseAllConsent() {
  applyConsent({ analytics: false, ads: false })
}

export { DEFAULT_PREFERENCES }
