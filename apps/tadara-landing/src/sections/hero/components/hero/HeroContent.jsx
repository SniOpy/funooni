import { useState } from "react"
import styled from "styled-components"
import { tadaraTheme } from "../../../../designSystem"
import { submitLead } from "../../../../services/leadsApi"
import EmailSuccessModal from "../../../../components/EmailSuccessModal"

function HeroContent() {
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
        source: "hero",
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
    <HeroContentStyled>
      <h1>Votre enfant utilise chaque jour un héritage de 1200 ans. <br/>Sans le savoir</h1>
      <h2 className="hero-subtitle">
        Derrière les objets du quotidien qu’il croit
        ordinaires.<br/>
        Il y a une histoire extraordinaire.<br/>
        Celle de  <span>la civilisation arabo-musulmane.</span><br/>
        Chaque mois, Tadara la lui raconte
        dans <span>une lettre à son nom.</span>
      </h2>

      <hr className="hero-subtitle-hr" />

      <div className="form-content">
        <h2>Inscrivez-vous gratuitement pour bénéficier
          d’une offre privilégiée lors de la prochaine
          ouverture des abonnements
        </h2>
        <FormContentStyled onSubmit={handleSubmit}>
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
            {isSubmitting ? "Envoi en cours..." : "Je veux être informé du lancement"}
          </button>
          {error ? <p className="form-error">{error}</p> : null}
        </FormContentStyled>
      </div>

      <EmailSuccessModal
        open={successOpen}
        title={successTitle}
        message={successMessage}
        onClose={() => setSuccessOpen(false)}
      />
    </HeroContentStyled>
  )
}

const HeroContentStyled = styled.div`
  width: min(100%, 760px);

  h1 {
    margin: 0;
    font-size: clamp(2rem, 4.6vw, 3.25rem);
    text-transform: uppercase;
    font-weight: 700;
    color: #2B1712;
    font-family: ${tadaraTheme.typography.fonts.heading};
    line-height: 1.1;
  }

  .hero-subtitle {
    margin: ${tadaraTheme.spacing[8]} 0 0;
    font-size: clamp(1.125rem, 2.1vw, 1.375rem);
    font-family: 'Montserrat';
    font-weight: 400;
    color: #4B3A34;
    padding-left: clamp(0.5rem, 2vw, 1.875rem);
    line-height: 1.35;
    width: min(100%, 90%);


    span {
      font-weight: bold;
    }

    
  }

  .hero-subtitle-hr {
    background-color: #717373;
    height: 1px;
    width: min(100%, 420px);
    margin: ${tadaraTheme.spacing[8]} auto 0;
    border: 0;
  }

  .form-content {
    font-size: ${tadaraTheme.typography.sizes.sm};
    font-family: "Montserrat";
    font-weight: 400;
    color: rgb(43, 23, 18);
    width: min(100%, 560px);
    padding-left: 0;
    margin-inline: 0;
    margin-top: ${tadaraTheme.spacing[4]};

    h2 {
      margin: 0;
      font-size: clamp(1rem, 1.8vw, 1.125rem);
      line-height: 1.45;
    }
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    width: 100%;

    .hero-subtitle {
      padding-left: 0;
      width: 100%;
    }

    .form-content {
      width: 100%;
    }
  }

`

const FormContentStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${tadaraTheme.spacing[2]};
  width: min(100%, 430px);
  margin-top: ${tadaraTheme.spacing[3]};
  margin-inline: 0;

  input, button {
    border-radius: ${tadaraTheme.radius.pill};
    height: 45px;
    text-align: center;
    font-family: ${tadaraTheme.typography.fonts.body};
    font-weight: 400;
    font-size: ${tadaraTheme.typography.sizes.sm};
    color: ${tadaraTheme.colors.text.primary};
    width: 100%;
  }

  input {
    border: 2px solid ${tadaraTheme.colors.border.medium};
    background-color: ${tadaraTheme.colors.form.inputBg};
    color: ${tadaraTheme.colors.text.primary};
  }

  input::placeholder {
    color: ${tadaraTheme.colors.text.subtle};
    font-size: ${tadaraTheme.typography.sizes.base};
  }

  button {
    background-color: #2B1712;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: ${tadaraTheme.typography.sizes.base};
    transition: background-color ${tadaraTheme.motion.duration.normal} ${tadaraTheme.motion.easing.default};

    &:hover:not(:disabled) {
      background-color: ${tadaraTheme.colors.form.buttonHover};
    }

    &:disabled {
      opacity: 0.7;
      cursor: wait;
    }
  }

  .form-error {
    margin: ${tadaraTheme.spacing[1]} 0 0;
    color: #8b2e2e;
    font-size: ${tadaraTheme.typography.sizes.sm};
    text-align: center;
  }

`
export default HeroContent
