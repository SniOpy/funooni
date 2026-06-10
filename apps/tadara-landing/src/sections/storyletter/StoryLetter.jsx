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
    background-color: ${tadaraTheme.colors.background.cream};

    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 80px;


    .story-letter-title {
        font-size: 52px;
        text-transform: uppercase;
        font-weight: 700;
        color: #2B1712;
        font-family: ${tadaraTheme.typography.fonts.heading};
        line-height: 1.1;
    }

  .story-letter-subtitle {
    font-size: 32px;
    font-family: 'Montserrat';
    font-weight: 400;
    color: #4B3A34;
    line-height: 1.2;
    width:80%;
    padding-left: 30px;


    span {
      font-weight: bold;
    }

    
  }
`
const StoryLetterInnerStyled = styled.div`
    width:66.6%;
    display:flex;
    flex-direction: column; 
    justify-content: center;
    gap : 40px;
    line-height: 1.2;
    
`;
const StoryLetterImagesStyled = styled.div`
    width:33.3%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: space-between;

    img {
    border-radius: 30px;
    object-fit: cover;
    }
`;
export default StoryLetter