import { useState } from "react"
import styled from "styled-components"
import { tadaraTheme } from "../../designSystem"
import { submitLead } from "../../services/leadsApi"
import EmailSuccessModal from "../../components/EmailSuccessModal"

const { colors, spacing, typography, radius } = tadaraTheme

function LaunchOffer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [successOpen, setSuccessOpen] = useState(false)
  const [successTitle, setSuccessTitle] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Merci d’indiquer votre adresse email.")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitLead({
        email,
        source: "launch-offer",
      })

      if (result.alreadyRegistered) {
        setSuccessTitle("Vous êtes déjà inscrit")
        setSuccessMessage(
          "Vous recevrez bien les informations concernant le lancement de TADARA."
        )
      } else {
        setSuccessTitle("Inscription confirmée !")
        setSuccessMessage(
          "Vous serez informé en priorité de l'ouverture de l'abonnement TADARA"
        )
      }

      setSuccessOpen(true)
      setEmail("")
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <LaunchOfferSectionStyled>
      <LaunchOfferContentStyled>
        <h1>OFFREZ LUI UNE HISTOIRE QUI LUI APPARTIENT</h1>

        <p><strong>Il connaît les dinosaures. Les vikings. Les chevaliers. Les super-héros.</strong></p>
        <p><strong>Mais il ne sait pas encore...</strong></p>
        <p>Que certains objets de sa chambre ont traversé les siècles.</p>
        <p>Que des femmes et des hommes d&#39;exception ont changé notre façon de calculer, de nous
soigner ou de regarder les étoiles.</p>
        <p>Que l&#39;Histoire est faite de ponts invisibles entre les époques et les civilisations.</p>
        <p><strong>Cette histoire existe. Elle est vraie.</strong></p>
        <p><strong>Et elle l&#39;attend dans sa boîte aux lettres!</strong></p>

        <LaunchOfferFormStyled onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Je veux mon offre de lancement"}
          </button>
          {error ? <p className="form-error">{error}</p> : null}
        </LaunchOfferFormStyled>
      </LaunchOfferContentStyled>

      <LaunchOfferImageStyled>
        <img
          src="/images/launch-offer/launch-offer.jpg"
          alt="launch-offer"
          width={680}
          height={450}
        />
      </LaunchOfferImageStyled>

      <EmailSuccessModal
        open={successOpen}
        title={successTitle}
        message={successMessage}
        onClose={() => setSuccessOpen(false)}
      />
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

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;

    p {
      max-width: 100%;
    }
  }
`

const LaunchOfferFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing[3]};
  margin-top: ${spacing[5]};
  width: min(100%, 420px);

  input {
    width: 100%;
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
    width: 100%;
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

    &:hover:not(:disabled) {
      background-color: ${colors.form.buttonHover};
    }

    &:disabled {
      opacity: 0.7;
      cursor: wait;
    }
  }

  .form-error {
    margin: 0;
    color: #8b2e2e;
    font-family: ${typography.fonts.body};
    font-size: ${typography.sizes.sm};
    text-align: center;
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
