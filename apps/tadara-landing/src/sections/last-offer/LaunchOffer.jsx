import styled from "styled-components"
import { tadaraTheme } from "../../designSystem"

const { colors, spacing, typography, radius } = tadaraTheme

function LaunchOffer() {
  return (
    <LaunchOfferSectionStyled>
      <LaunchOfferContentStyled>
        <h1>OFFREZ LUI UNE HISTOIRE QUI LUI APPARTIENT</h1>

        <p>Il connaît les dinosaures. Les vikings. Les chevaliers. Les super-héros.</p>
        <p>Mais il ne sait pas encore...</p>
        <p>Que certains objets de sa chambre ont traversé les siècles.</p>
        <p>Que des femmes et des hommes d&#39;exception ont changé notre façon de calculer, de nous
soigner ou de regarder les étoiles.</p>
        <p>Que l&#39;Histoire est faite de ponts invisibles entre les époques et les civilisations.</p>
        <p>Cette histoire existe. Elle est vraie.</p>
        <p>Et elle l&#39;attend dans sa boîte aux lettres!</p>

        <input type="text" placeholder="votre@email.com" />
        <button>Je veux mon offre de lancement</button>
        <span>Gratuit.Sans engagement</span>
      </LaunchOfferContentStyled>

      <LaunchOfferImageStyled>
        <img
          src="/images/launch-offer/launch-offer.jpg"
          alt="launch-offer"
          width={680}
          height={450}
        />
      </LaunchOfferImageStyled>
    </LaunchOfferSectionStyled>
  )
}

const LaunchOfferSectionStyled = styled.section`
  display: flex;
  gap: ${spacing[10]};
  padding: ${spacing[20]};
  background-color: ${colors.background.cream};

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    flex-direction: column;
    padding: ${spacing[12]} ${spacing[6]};
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${spacing[10]} ${spacing[5]};
  }
`

const LaunchOfferContentStyled = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};

  h1 {
    margin: 0;
    font-family: ${typography.fonts.heading};
    font-size: clamp(2rem, 4.6vw, ${typography.sizes['4xl']});
    font-weight: ${typography.weights.bold};
    color: ${colors.text.primary};
    line-height: ${typography.lineHeights.heading};
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-family: ${typography.fonts.body};
    font-size: clamp(1rem, 2.2vw, ${typography.sizes['2xl']});
    font-weight: ${typography.weights.regular};
    color: ${colors.text.secondary};
    line-height: ${typography.lineHeights.body};
    max-width: 90%;
  }

  input {
    margin-top: ${spacing[5]};
    width: min(100%, 420px);
    height: 45px;
    border: 2px solid ${colors.border.medium};
    border-radius: ${radius.pill};
    padding: 0 ${spacing[8]};
    background-color: ${colors.form.inputBg};
    color: ${colors.text.primary};
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.sm};
    font-weight: ${typography.weights.regular};
    text-align: center;
  }

  button {
    width: min(100%, 420px);
    border: 2px solid #ece6e6;
    border-radius: ${radius.pill};
    padding: ${spacing[4]} ${spacing[8]};
    background-color: ${colors.brand.primary};
    color: ${colors.text.inverse};
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.xl};
    font-weight: ${typography.weights.bold};
    cursor: pointer;
    transition: background-color ${tadaraTheme.motion.duration.normal} ${tadaraTheme.motion.easing.default};

    &:hover {
      background-color: ${colors.form.buttonHover};
    }
  }

  span {
    width: min(100%, 420px);
    text-align: center;
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes['2xl']};
    font-weight: ${typography.weights.regular};
    color: ${colors.text.primary};
    line-height: ${typography.lineHeights.body};
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;

    p {
      max-width: 100%;
    }
  }
`

const LaunchOfferImageStyled = styled.div`
  width: 42%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: ${spacing[10]};
    object-fit: cover;
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;
  }
`

export default LaunchOffer
