import React from 'react'
import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

function Content() {
  return (
    <ContentSectionStyled>
        <ContentTitleStyled>
          <h1 className="story-letter-title">chaque mois, votre enfant reçoit</h1>
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
            <img src="/images/content/postcard.jpg" width={240} height={380} alt="lettre" />
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
    gap: ${tadaraTheme.spacing[10]};
    padding: ${tadaraTheme.spacing[20]};
    background-color: ${tadaraTheme.colors.background.soft};

    .story-letter-title {
        font-size: clamp(2rem, 4.6vw, 3.25rem);
        text-transform: uppercase;
        font-weight: 700;
        color: ${tadaraTheme.colors.text.primary};
        font-family: ${tadaraTheme.typography.fonts.heading};
        line-height: 1.1;
        margin: 0;
    }

    @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
      padding: ${tadaraTheme.spacing[12]} ${tadaraTheme.spacing[6]};
    }

    @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
      padding: ${tadaraTheme.spacing[10]} ${tadaraTheme.spacing[5]};
    }
`
const ContentTitleStyled = styled.div`
    width: 100%;
`
const ReceiveImagesStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${tadaraTheme.spacing[10]};
    width: 100%;

    @media (max-width: ${tadaraTheme.breakpoints.desktop}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
`
const ReceiveImageStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${tadaraTheme.spacing[6]};
    align-items: flex-start;

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        object-position: center;
        border: 3px solid #000;
        display: block;
    }

    .receive-image-title {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: clamp(1.25rem, 2.5vw, 1.625rem);
        font-weight: 700;
        color: ${tadaraTheme.colors.text.primary};
        margin: 0;
        line-height: 1.3;
    }

    .content-text {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: clamp(1rem, 2.1vw, 1.375rem);
        font-weight: 400;
        color: ${tadaraTheme.colors.text.secondary};
        line-height: 1.55;
        margin: 0;
    }

   
`
export default Content