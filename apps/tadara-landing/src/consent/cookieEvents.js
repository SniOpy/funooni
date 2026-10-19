export const OPEN_COOKIE_SETTINGS_EVENT = "tadara-open-cookie-settings"

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
}
