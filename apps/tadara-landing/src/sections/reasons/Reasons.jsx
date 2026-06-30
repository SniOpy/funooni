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
          <div className="reasons-bullets">
            <ul className="reasons-bullet-list">
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui qui pose mille questions
              </li>
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui dont les parents veulent lui ouvrir les yeux
                sur une civilisation qui a changé le monde et
                qu'on raconte encore trop peu
              </li>
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui dont les parents veulent transmettre
              </li>
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui qui boude la lecture
              </li>
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui qui passe trop de temps sur les écrans
              </li>
              <li className="reasons-bullet-item">
                <span className="reasons-bullet-icon">
                  <img src="/images/icons/icon-done.png" alt="Bullet point icon" width={50} height={50} />
                </span>
                Celui qui aime collectionner
              </li>
            </ul>
          </div>
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
    font-size: ${typography.sizes['4xl']};
    text-transform: uppercase;
    font-weight: ${typography.weights.bold};
    color: ${colors.text.primary};
    font-family: ${typography.fonts.heading};
    line-height: ${typography.lineHeights.heading};
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
  font-size: clamp(1.125rem, 2.2vw, ${typography.sizes['2xl']});
  font-weight: ${typography.weights.medium};
  color: ${colors.text.primary};
  font-family: ${typography.fonts.body};
  margin-top: ${spacing[12]};

  li {
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    gap: 30px;
  }

  .reasons-bullet-icon {
    flex-shrink: 0;
    display: flex;

    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }

  .reasons-bullet-list {
    display: flex;
    flex-direction: column;
    gap: ${spacing[8]};
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    width: 100%;
    margin-top: 0;
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    li {
      gap: ${spacing[4]};
      align-items: flex-start;
    }

    .reasons-bullet-list {
      padding: 0;
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
