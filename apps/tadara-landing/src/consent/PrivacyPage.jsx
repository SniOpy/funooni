import { createGlobalStyle, styled } from "styled-components"
import { tadaraTheme } from "../designSystem"
import CookieBanner from "./CookieBanner"
import SiteFooter from "./SiteFooter"
import { openCookieSettings } from "./cookieEvents"

const { colors, spacing, typography } = tadaraTheme

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${colors.background.soft};
  }
`

function PrivacyPage() {
  return (
    <Page>
      <GlobalStyle />
      <Main>
        <p>
          <a href="/">Retour à Tadara</a>
        </p>
        <h1>Politique de confidentialité</h1>
        <p>
          Tadara est un projet édité par Funooni. Cette page décrit les données
          collectées sur tadara.funooni.fr.
        </p>

        <h2>Inscriptions</h2>
        <p>
          Lorsque vous laissez votre email, il est enregistré pour vous informer
          du lancement de Tadara (liste d’attente). Il n’est pas vendu à des
          tiers. Vous pouvez demander la suppression de votre adresse en
          écrivant via les coordonnées indiquées sur le site ou le compte
          Instagram Funooni Éditions.
        </p>

        <h2>Cookies et traceurs</h2>
        <p>
          Les cookies strictement nécessaires (dont la mémorisation de vos choix)
          ne requièrent pas de consentement. Les traceurs de mesure d’audience et
          de publicité (Google Tag Manager / services Google) ne sont chargés
          que si vous les acceptez. Votre choix est conservé 6 mois. Vous pouvez
          le modifier à tout moment via{" "}
          <button type="button" onClick={openCookieSettings}>
            Cookies
          </button>
          .
        </p>
        <p>
          En cas de consentement, des données de navigation peuvent être
          transmises à Google (États-Unis) selon les tags configurés dans le
          conteneur GTM-5SCFXJLG.
        </p>

        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous pouvez demander l’accès, la rectification
          ou l’effacement des données vous concernant, et introduire une
          réclamation auprès de la CNIL.
        </p>
      </Main>
      <CookieBanner />
      <SiteFooter />
    </Page>
  )
}

export default PrivacyPage

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.background.soft};
  color: ${colors.text.primary};
`

const Main = styled.main`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: ${spacing[16]} ${spacing[6]} ${spacing[20]};

  h1 {
    font-family: ${typography.fonts.heading};
    font-size: ${typography.sizes["2xl"]};
    margin: 0 0 ${spacing[5]};
  }

  h2 {
    font-family: ${typography.fonts.heading};
    font-size: ${typography.sizes.xl};
    margin: ${spacing[8]} 0 ${spacing[3]};
  }

  p {
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.base};
    line-height: ${typography.lineHeights.body};
    color: ${colors.text.secondary};
    margin: 0 0 ${spacing[4]};
  }

  a,
  button {
    padding: 0;
    border: none;
    background: none;
    color: ${colors.brand.primary};
    font: inherit;
    font-weight: ${typography.weights.semiBold};
    cursor: pointer;
    text-decoration: underline;
  }
`
