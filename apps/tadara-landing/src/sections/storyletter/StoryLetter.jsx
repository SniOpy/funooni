import React from 'react'
import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

function StoryLetter() {
  return (
    <StoryLetterSectionStyled>
        <StoryLetterInnerStyled>
            <h1 className="story-letter-title">dans chaque lettre, un morceau d'histoire directement dans<br/> sa boîte aux lettres</h1>
            <h2 className="story-letter-subtitle">
                Chaque mois, une enveloppe vintage fermée par un
                sceau d'encre, personnalisée au prénom de votre enfant,
                arrive chez vous.<br/>
                Il l'ouvre.<br/>
                Il déplie la lettre.
                Et soudain, les objets autour de lui commencent à
                raconter une histoire.
            </h2>
        </StoryLetterInnerStyled>
        <StoryLetterImagesStyled>
            <img src="/images/storyletter/story2.jpg" width={400} height={350} alt="storyletter-image-2" />
            <img src="/images/storyletter/story1.jpg" width={400} height={350} alt="storyletter-image-1" />
        </StoryLetterImagesStyled>
    </StoryLetterSectionStyled>
  )
}

const StoryLetterSectionStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${tadaraTheme.spacing[10]};
    padding: ${tadaraTheme.spacing[20]};
    background-color: ${tadaraTheme.colors.background.cream};

    .story-letter-title {
        margin: 0;
        font-size: clamp(2rem, 4.6vw, 3.25rem);
        text-transform: uppercase;
        font-weight: 700;
        color: #2B1712;
        font-family: ${tadaraTheme.typography.fonts.heading};
        line-height: 1.1;
    }

  .story-letter-subtitle {
    margin: 0;
    font-size: clamp(1.125rem, 2.4vw, 2rem);
    font-family: 'Montserrat';
    font-weight: 400;
    color: #4B3A34;
    line-height: 1.35;
    width: min(100%, 90%);
    padding-left: ${tadaraTheme.spacing[4]};


    span {
      font-weight: bold;
    }

    
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    flex-direction: column;
    gap: ${tadaraTheme.spacing[8]};
    padding: ${tadaraTheme.spacing[12]} ${tadaraTheme.spacing[6]};
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${tadaraTheme.spacing[10]} ${tadaraTheme.spacing[5]};

    .story-letter-subtitle {
      width: 100%;
      padding-left: 0;
    }
  }
`
const StoryLetterInnerStyled = styled.div`
    width: 66.6%;
    display:flex;
    flex-direction: column; 
    justify-content: center;
    gap : ${tadaraTheme.spacing[10]};
    line-height: 1.2;

    @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
      width: 100%;
    }
`;
const StoryLetterImagesStyled = styled.div`
    width: 33.3%;
    display: flex;
    flex-direction: column;
    gap: ${tadaraTheme.spacing[8]};
    justify-content: space-between;

    img {
      width: 100%;
      max-width: 420px;
      border-radius: 30px;
      object-fit: cover;
    }

    @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
      width: 100%;
      flex-direction: row;
      gap: ${tadaraTheme.spacing[5]};
      justify-content: flex-start;
    }

    @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
      flex-direction: column;
      gap: ${tadaraTheme.spacing[4]};
    }
`;
export default StoryLetter