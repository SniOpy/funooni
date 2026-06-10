import React from 'react'
import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

function Content() {
  return (
    <ContentSectionStyled>
        <ContentTitleStyled>
          <h1 className="story-letter-title">chaque moi, votre enfant reçoit</h1>
        </ContentTitleStyled>
        <ReceiveImagesStyled>
          <ReceiveImageStyled>
            <img src="/images/content/letter.jpg" width={240} height={380} alt="lettre" />
            <h2 className="receive-image-title">La lettre</h2>
            <p className='content-text'>Un recit vivant, court et
              illustré qui relie un
              objet du quotidien à
              son incroyable voyage
              historique.
            </p>
          </ReceiveImageStyled>
          <ReceiveImageStyled>
            <img src="/images/content/stamp.jpg" width={260} height={350} alt="lettre" />
            <h2 className="receive-image-title">La carte collector</h2>
            <p className='content-text'>Une carte inspirée des
                timbres anciens, à
                collectionner
                précieusement.
            </p>
          </ReceiveImageStyled>
          <ReceiveImageStyled>
            <img src="/images/content/stickers.jpg" width={240} height={380} alt="lettre" />
            <h2 className="receive-image-title">Les stickers</h2>
            <p className='content-text'>Des stickers pop &
modernes pour
montrer que cet
héritage est bien
vivant.
            </p>
          </ReceiveImageStyled>
          <ReceiveImageStyled>
            <img src="/images/content/postcard.png" width={240} height={380} alt="lettre" />
            <h2 className="receive-image-title">La carte postale</h2>
            <p className='content-text'>Une vraie carte postale
à écrire à la main et à
poster pour
réapprendre les gestes
simples.
            </p>
          </ReceiveImageStyled>
        </ReceiveImagesStyled>

    </ContentSectionStyled>
  )
}

const ContentSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: ${tadaraTheme.colors.background.cream};
    padding: 80px;

    .story-letter-title {
        font-size: 52px;
        text-transform: uppercase;
        font-weight: 700;
        color: ${tadaraTheme.colors.text.primary};
        font-family: ${tadaraTheme.typography.fonts.heading};
        line-height: 1.1;
        margin: 0;
    }
`
const ContentTitleStyled = styled.div`
    width: 100%;
`
const ReceiveImagesStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    width: 100%;
`
const ReceiveImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        object-position: center;
        border: 2px solid #000;
        display: block;
    }

    .receive-image-title {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: 18px;
        font-weight: 700;
        color: ${tadaraTheme.colors.text.primary};
        margin: 0;
        line-height: 1.3;
    }

    .content-text {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: 16px;
        font-weight: 400;
        color: ${tadaraTheme.colors.text.secondary};
        line-height: 1.55;
        margin: 0;
    }
`
export default Content