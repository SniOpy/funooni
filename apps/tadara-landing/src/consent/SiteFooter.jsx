import styled from "styled-components"
import { tadaraTheme } from "../designSystem"
import { openCookieSettings } from "./cookieEvents"

const { colors, spacing, typography } = tadaraTheme

function SiteFooter() {
  return (
    <Footer>
      <p>Tadara — Funooni</p>
      <nav>
        <a href="/confidentialite">Confidentialité</a>
        <button type="button" onClick={openCookieSettings}>
          Cookies
        </button>
      </nav>
    </Footer>
  )
}

export default SiteFooter

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${spacing[4]};
  padding: ${spacing[6]} ${spacing[10]};
  background: ${colors.background.dark};
  color: ${colors.text.inverse};

  p {
    margin: 0;
    font-family: ${typography.fonts.accent};
    font-size: ${typography.sizes.sm};
  }

  nav {
    display: flex;
    gap: ${spacing[5]};
  }

  a,
  button {
    padding: 0;
    border: none;
    background: none;
    color: ${colors.text.inverse};
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.sm};
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${spacing[5]};
  }
`
