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

  h1 {
    font-size: 52px;
    text-transform: uppercase;
    font-weight: 700;
    color: #2B1712;
    font-family: ${tadaraTheme.typography.fonts.heading};
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 22px;
    font-family: 'Montserrat';
    font-weight: 400;
    color: #4B3A34;
    padding-left: 30px;
    line-height: 1.2;
    width:80%;


    span {
      font-weight: bold;
    }

    
  }

  .hero-subtitle-hr {
    background-color: #717373;
    height: 1px;
    width: 50%;
    margin-inline: 20%;
  }

  .form-content {
    font-size: 14px;
    font-family: "Montserrat";
    font-weight: 400;
    color: rgb(43, 23, 18);
    width: 80%;
    padding-left: 3px;
    margin-inline: 2%;
  }

`

const FormContentStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap:8px;
  width: 80%;
  margin-inline: 10%;

  input, button {
    border-radius: 30px;
    height:45px;
    text-align: center;
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 14px;
    color: rgb(43, 23, 18);
  }

  input::placeholder {
    color: rgb(43, 23, 18);
    font-size: 16px;
  }

  button {
    background-color: #2B1712;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;

  }

`
export default HeroContent