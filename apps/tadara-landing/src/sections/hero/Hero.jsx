import styled from 'styled-components'

function Hero() {
  return (
    <HeroSection>
      <HeroInner>
        <HeroContent>
          {/* Ton contenu texte viendra ici */}
        </HeroContent>

        <HeroVisual>
          <HeroImage
            src="/images/hero-tadara.jpg"
            alt="Enfant découvrant une enveloppe éducative sur un bureau avec livres et objets du quotidien"
          />
          <HeroImageFade />
        </HeroVisual>
      </HeroInner>
    </HeroSection>
  )
}

export default Hero

const HeroSection = styled.section`
  width: 100%;
  min-height: 100svh;
  background: var(--color-cream);
  overflow: hidden;
`

const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 42% 58%;
  min-height: 100svh;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`

const HeroContent = styled.div`
  background: var(--color-cream);
  padding: 48px 48px 32px 48px;
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    order: 2;
    padding: 24px;
  }
`

const HeroVisual = styled.div`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: var(--color-cream);

  @media (max-width: 992px) {
    order: 1;
    min-height: 42vh;
  }

  @media (max-width: 768px) {
    min-height: 38vh;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;

  @media (max-width: 992px) {
    object-position: center top;
  }
`

const HeroImageFade = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  /* Desktop : fondu horizontal de gauche vers droite */
  background: linear-gradient(
    90deg,
    rgba(244, 230, 211, 1) 0%,
    rgba(244, 230, 211, 0.92) 8%,
    rgba(244, 230, 211, 0.72) 14%,
    rgba(244, 230, 211, 0.38) 20%,
    rgba(244, 230, 211, 0.12) 25%,
    rgba(244, 230, 211, 0) 30%
  );

  @media (max-width: 992px) {
    /* Mobile : fondu vertical vers le beige en bas */
    background: linear-gradient(
      180deg,
      rgba(244, 230, 211, 0) 58%,
      rgba(244, 230, 211, 0.18) 72%,
      rgba(244, 230, 211, 0.5) 82%,
      rgba(244, 230, 211, 0.82) 91%,
      rgba(244, 230, 211, 1) 100%
    );
  }
`