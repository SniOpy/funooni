import styled from "styled-components"
import { tadaraTheme } from "../../designSystem"

const { colors, spacing } = tadaraTheme
function Questions() {
  return (
    <QuestionsSectionStyled>
      <QuestionsTitleStyled>
        <h1>Des questions ? on vous répond !</h1>
      </QuestionsTitleStyled>

      <QuestiosContentStyled>
        <QuestiosItemStyled>
            <img src="/images/questions/engagement-financier.png" alt="image engagement financier" width={500}/>
            <h2>Non l'inscription est entièrement gratuite <br/>et sans engagement</h2>
        </QuestiosItemStyled>
        <QuestiosItemStyled>
            <img src="/images/questions/abonnement.png" alt="image prix abonnement" width={500}/>
            <h2>Le tarif sera dévoilé lors du lancement.<br />Les premiers inscrits bénéficient automatiquement <br/>d'une offre de lancement réservée aux familles fondatrices</h2>
        </QuestiosItemStyled>
      </QuestiosContentStyled>
    </QuestionsSectionStyled>
  )
}

const QuestionsSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  padding: ${spacing[20]};
  background-color: ${colors.background.soft};
`
const QuestionsTitleStyled = styled.div`
    
    font-size: ${tadaraTheme.typography.sizes['xl']};
    text-transform: uppercase;
    font-weight: ${tadaraTheme.typography.weights.bold};
    color: ${tadaraTheme.colors.text.primary};
    font-family: ${tadaraTheme.typography.fonts.heading};
    line-height: ${tadaraTheme.typography.lineHeights.heading};
    margin: 0;
    `
const QuestiosContentStyled = styled.div`
  padding-left : ${spacing[24]};
 `
const QuestiosItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[20]};

  
    h2 {
      padding: 5px ${spacing[10]};
      margin-bottom: 60px;
      font-size: ${tadaraTheme.typography.sizes['3xl']};
      font-weight: ${tadaraTheme.typography.weights.regular};
      color: ${tadaraTheme.colors.text.primary};
      font-family: ${tadaraTheme.typography.fonts.body};
      line-height: ${tadaraTheme.typography.lineHeights.body};
    }
 `


export default Questions