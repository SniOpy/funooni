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
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: ${tadaraTheme.colors.background.soft};
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
  }
`
const ContentTitleStyled = styled.div`
border: 1px solid blue;
`
const ReceiveImagesStyled = styled.div`
border: 1px solid green;
display: flex;
gap: 20px;
`
const ReceiveImageStyled = styled.div`
border: 1px solid yellow;
width: 20%;
display: flex;
flex-direction: column;
gap: 10px;  
align-items: center;
`
export default Content