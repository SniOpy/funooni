import styled from "styled-components"
import { tadaraTheme } from "../../designSystem"

const { colors, typography, spacing } = tadaraTheme
function WhyStart() {
  return (
    <WhyStartSectionStyled>
      <WhyStartTitleStyled>
        <h1>pourquoi les parents s'inscrivent déjà</h1>
      </WhyStartTitleStyled>
      <WhyStartContentStyled>
        <WhyStartContentItemStyled>
          <img src="/images/whystart/why-start.jpg" alt="why-start-1" width={800} height={600}/>
          <ul>
            <li>Parce qu'ils cherchent une alternative aux écrans</li>
            <li>Parce qu'ils veulent nourrir la curiosité de leur enfant.</li>
            <li>Parce qu'ils aiment les beaux objets.</li>
            <li>Parce qu'ils cherchent une manière simple de
            transmettre</li>
            <li>Parce qu'ils savent que certaines histoires méritent
            d'être racontées.</li>
          </ul>
        </WhyStartContentItemStyled>
      </WhyStartContentStyled>
    </WhyStartSectionStyled>

  )
}

const WhyStartSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  padding: ${spacing[20]};
  background-color: ${colors.background.cream};

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    padding: ${spacing[12]} ${spacing[6]};
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${spacing[10]} ${spacing[5]};
  }
`
const WhyStartTitleStyled = styled.div`
    
    font-size: ${tadaraTheme.typography.sizes['xl']};
    text-transform: uppercase;
    font-weight: ${tadaraTheme.typography.weights.bold};
    color: ${tadaraTheme.colors.text.primary};
    font-family: ${tadaraTheme.typography.fonts.heading};
    line-height: ${tadaraTheme.typography.lineHeights.heading};
    margin: 0;

    h1 {
      margin: 0;
      font-size: clamp(2rem, 4.6vw, 3.25rem);
    }
    `
const WhyStartContentStyled = styled.div``

const WhyStartContentItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${spacing[10]};

    img {
        width: min(100%, 800px);
        height: auto;
        border-radius: ${spacing[10]};
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: ${spacing[10]};
        text-decoration: none;
        list-style: none;
        padding-top: 50px;
        
        li {
            font-size: clamp(1.125rem, 2.2vw, 1.75rem);
            font-weight: ${typography.weights.medium};
            font-family: ${typography.fonts.body};
            line-height: ${typography.lineHeights.body};
            color: ${colors.text.primary};
            margin: 0;
            padding: 0;
            text-align: left;
            text-wrap: wrap;
            word-wrap: break-word;
        }
    }

    @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
      flex-direction: column;
      gap: ${spacing[6]};

      ul {
        padding-top: 0;
        gap: ${spacing[6]};
        padding-left: 0;
      }
    }
`

export default WhyStart