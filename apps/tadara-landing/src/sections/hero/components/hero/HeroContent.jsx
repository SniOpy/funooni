import styled from "styled-components"
import { tadaraTheme } from "../../../../designSystem"

function HeroContent() {
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
        <FormContentStyled>
          <input type="email" placeholder="Entrez votre adresse email" />
          <button type="submit">Je veux être informé du lancement</button>
        </FormContentStyled>
      </div>
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
    margin: 0;
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
    margin: 0 auto;
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

    &:hover {
      background-color: ${tadaraTheme.colors.form.buttonHover};
    }

  }

`
export default HeroContent