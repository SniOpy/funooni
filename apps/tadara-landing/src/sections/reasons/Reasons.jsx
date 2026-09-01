import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

const { colors, typography, spacing } = tadaraTheme

function Reasons() {
  return (
    <ReasonsSectionStyled>
      <ReasonsTitleStyled>
        <h1 className="reasons-title">est-ce fait pour votre enfant ?</h1>
      </ReasonsTitleStyled>
      <ReasonsContentStyled>
        <ReasonsBulletsStyled>
          <ul className="reasons-bullet-list">
            <li>Celui qui pose mille questions.</li>
            <li>
              Celui dont les parents veulent lui ouvrir les yeux
              sur une civilisation qui a changé le monde et
              qu'on raconte encore trop peu.
            </li>
            <li>Celui dont les parents veulent transmettre.</li>
            <li>Celui qui boude la lecture.</li>
            <li>Celui qui passe trop de temps sur les écrans.</li>
            <li>Celui qui aime collectionner.</li>
          </ul>
        </ReasonsBulletsStyled>
        <ReasonsImageStyled>
          <img src="/images/reasons/fillette-letter.jpg" width={700} height={700} alt="Reasons image" />
        </ReasonsImageStyled>
      </ReasonsContentStyled>
    </ReasonsSectionStyled>
  )
}

const ReasonsSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  padding: ${spacing[20]};
  background-color: ${colors.background.cream};

  .reasons-title {
    font-size: clamp(2rem, 4.6vw, 3.25rem);
    text-transform: uppercase;
    font-weight: ${typography.weights.bold};
    color: ${colors.text.primary};
    font-family: ${typography.fonts.heading};
    line-height: 1.1;
    margin: 0;
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    padding: ${spacing[12]} ${spacing[6]};
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${spacing[10]} ${spacing[5]};
  }
`

const ReasonsTitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: ${typography.sizes.xl};
  font-weight: ${typography.weights.bold};
  color: ${colors.text.primary};
  font-family: ${typography.fonts.body};
  line-height: ${typography.lineHeights.heading};
  margin: 0;
`

const ReasonsContentStyled = styled.div`
  display: flex;
  padding: 0;

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    flex-direction: column;
    gap: ${spacing[8]};
  }
`

const ReasonsBulletsStyled = styled.div`
  display: flex;
  width: 50%;
  margin-top: ${spacing[12]};

  .reasons-bullet-list {
    display: flex;
    flex-direction: column;
    gap: ${spacing[10]};
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: clamp(1.125rem, 2.2vw, 1.75rem);
    font-weight: ${typography.weights.medium};
    font-family: ${typography.fonts.body};
    line-height: ${typography.lineHeights.body};
    color: ${colors.text.primary};
    margin: 0;
    padding: 0 1rem 0 0;
    text-align: left;
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;
    margin-top: 0;

    .reasons-bullet-list {
      gap: ${spacing[6]};
    }
  }
`

const ReasonsImageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  img {
    width: 100%;
    max-width: 700px;
    height: auto;
    border-radius: 50px;
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;
  }
`

export default Reasons
