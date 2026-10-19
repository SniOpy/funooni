import { useEffect, useState } from "react"
import styled from "styled-components"
import { tadaraTheme } from "../designSystem"
import {
  acceptAllConsent,
  applyConsent,
  readStoredConsent,
  refuseAllConsent,
} from "./consent"
import { OPEN_COOKIE_SETTINGS_EVENT } from "./cookieEvents"

const { colors, spacing, typography, radius, shadows } = tadaraTheme

function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [customize, setCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [ads, setAds] = useState(false)

  useEffect(() => {
    const stored = readStoredConsent()

    if (stored) {
      applyConsent(stored)
      setAnalytics(stored.analytics)
      setAds(stored.ads)
      setVisible(false)
    } else {
      setVisible(true)
    }

    function handleOpen() {
      const current = readStoredConsent()
      setAnalytics(Boolean(current?.analytics))
      setAds(Boolean(current?.ads))
      setCustomize(true)
      setVisible(true)
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpen)
  }, [])

  function closeBanner() {
    setVisible(false)
    setCustomize(false)
  }

  function handleAcceptAll() {
    acceptAllConsent()
    setAnalytics(true)
    setAds(true)
    closeBanner()
  }

  function handleRefuseAll() {
    refuseAllConsent()
    setAnalytics(false)
    setAds(false)
    closeBanner()
  }

  function handleSaveCustom() {
    applyConsent({ analytics, ads })
    closeBanner()
  }

  if (!visible) return null

  return (
    <Backdrop role="dialog" aria-labelledby="cookie-banner-title" aria-modal="true">
      <Panel>
        <Copy>
          <h2 id="cookie-banner-title">Vos choix de cookies</h2>
          <p>
            Tadara utilise des traceurs de mesure d’audience et, le cas échéant, de
            publicité (Google Tag Manager), uniquement si vous y consentez. Vous
            pouvez accepter, refuser ou personnaliser.{" "}
            <a href="/confidentialite">En savoir plus</a>.
          </p>
        </Copy>

        {customize && (
          <Toggles>
            <label>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <strong>Mesure d’audience</strong>
                Statistiques de visite via Google (analytics_storage).
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={ads}
                onChange={(event) => setAds(event.target.checked)}
              />
              <span>
                <strong>Publicité</strong>
                Traceurs publicitaires Google (ad_storage, ad_user_data,
                ad_personalization).
              </span>
            </label>
          </Toggles>
        )}

        <Actions>
          <PrimaryButton type="button" onClick={handleAcceptAll}>
            Tout accepter
          </PrimaryButton>
          <SecondaryButton type="button" onClick={handleRefuseAll}>
            Tout refuser
          </SecondaryButton>
          {customize ? (
            <PrimaryButton type="button" onClick={handleSaveCustom}>
              Enregistrer
            </PrimaryButton>
          ) : (
            <TextButton type="button" onClick={() => setCustomize(true)}>
              Personnaliser
            </TextButton>
          )}
        </Actions>
      </Panel>
    </Backdrop>
  )
}

export default CookieBanner

const Backdrop = styled.div`
  position: fixed;
  z-index: 80;
  right: ${spacing[5]};
  bottom: ${spacing[5]};
  left: ${spacing[5]};
  display: flex;
  justify-content: center;
  pointer-events: none;

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    right: ${spacing[3]};
    bottom: ${spacing[3]};
    left: ${spacing[3]};
  }
`

const Panel = styled.div`
  pointer-events: auto;
  width: min(760px, 100%);
  padding: ${spacing[6]};
  background: ${colors.background.cream};
  color: ${colors.text.primary};
  border: 1px solid ${colors.border.light};
  border-radius: ${radius.lg};
  box-shadow: ${shadows.medium};
`

const Copy = styled.div`
  h2 {
    margin: 0 0 ${spacing[3]};
    font-family: ${typography.fonts.heading};
    font-size: ${typography.sizes.lg};
    font-weight: ${typography.weights.bold};
  }

  p {
    margin: 0;
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.sm};
    line-height: ${typography.lineHeights.body};
    color: ${colors.text.secondary};
  }

  a {
    color: ${colors.brand.primary};
    font-weight: ${typography.weights.semiBold};
  }
`

const Toggles = styled.div`
  display: grid;
  gap: ${spacing[3]};
  margin-top: ${spacing[5]};

  label {
    display: flex;
    gap: ${spacing[3]};
    align-items: flex-start;
    padding: ${spacing[3]};
    border: 1px solid ${colors.border.light};
    border-radius: ${radius.md};
    cursor: pointer;
  }

  input {
    margin-top: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    accent-color: ${colors.brand.primary};
  }

  span {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.sm};
    color: ${colors.text.secondary};
  }

  strong {
    color: ${colors.text.primary};
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing[3]};
  margin-top: ${spacing[5]};
`

const buttonBase = `
  min-height: 44px;
  min-width: 148px;
  padding: 0.7rem 1.1rem;
  border-radius: ${radius.md};
  font-family: ${typography.fonts.body};
  font-size: ${typography.sizes.sm};
  font-weight: ${typography.weights.semiBold};
  cursor: pointer;
`

const PrimaryButton = styled.button`
  ${buttonBase};
  border: 1px solid ${colors.form.buttonBg};
  background: ${colors.form.buttonBg};
  color: ${colors.form.buttonText};

  &:hover {
    background: ${colors.form.buttonHover};
  }
`

const SecondaryButton = styled.button`
  ${buttonBase};
  border: 1px solid ${colors.brand.primary};
  background: transparent;
  color: ${colors.brand.primary};

  &:hover {
    background: rgba(53, 25, 18, 0.06);
  }
`

const TextButton = styled.button`
  ${buttonBase};
  min-width: auto;
  border: none;
  background: transparent;
  color: ${colors.text.secondary};
  text-decoration: underline;
  padding-left: 0.4rem;
  padding-right: 0.4rem;

  &:hover {
    color: ${colors.brand.primary};
  }
`
