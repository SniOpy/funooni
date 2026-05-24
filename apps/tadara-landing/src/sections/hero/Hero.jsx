import styled from 'styled-components'

function Hero() {
  return (
    <HeroSection>
      <HeroInner>
        <HeroContent>
          <HeroBrand>
            <a href="/" aria-label="Tadara — accueil">
              <HeroLogo
                src="/images/hero/tadara.png"
                alt="TADARA"
                width={220}
                height={80}
                decoding="async"
              />
            </a>
          </HeroBrand>
          <div className="hero-title">
            <h1>Votre enfant utilise chaque jour un héritage de <span className="hero-title-highlight">1200 ans</span></h1>
            <h2>Sans le savoir.</h2>
          </div>
          <div className="short-subtitle">
            <p>Le savon qu'il utilise, les chiffres qu'il écrit à l'école, le mot "algorithme"... La civilisation arabo-musulmane a façonné son quotidien. <br/>Tadara est la lettre mensuelle qui révèle cette histoire fascinante dès 8 ans. </p>
          </div>
          <div className="emergency-offer">
            <h3 className="emergency-offer__title">Rejoignez les 100 Familles Fondatrices avant le lancement de septembre.</h3> 
            <p className="emergency-offer__description">Inscrivez-vous gratuitement sur la liste d'attente pour bloquer votre tarif pionnier de 10€/mois garanti à vie (au lieu du futur tarif public) et obtenir votre accès prioritaire.</p>

            <form className="emergency-offer__form">
              <input type="email" placeholder="Entrez votre adresse email" name='email' required/>
              <button type="submit">réserver mon accès prioritaire (gratuit)</button>
            </form>
          </div>

          <div className="hero-benefits">
            
            <div className="hero-benefits__item">
              <img src="/images/hero/icons/cadeau.svg" alt="" />
              <h4 className="hero-benefits__item-title">Zéro écran</h4>
              <p className="hero-benefits__item-description">Une expérience 100% physique et tactile (papier, cire, vrais objets) qu'aucun algorithme ne peut remplacer.</p>
            </div>
            
            <div className="hero-benefits__item">
              <img src="" alt="" />
              <h4 className="hero-benefits__item-title">Livré chez vous</h4>
              <p className="hero-benefits__item-description">Chaque mois, une enveloppe vintage personnalisée directement dans sa boîte aux lettres.</p>
            </div>
            
            <div className="hero-benefits__item">
              <img src="" alt="" />
              <h4 className="hero-benefits__item-title">Fier de ses racines</h4>
              <p className="hero-benefits__item-description">Un contenu valorisant pour nourrir son identité, comprendre son histoire et grandir fier de qui il est.</p>
            </div>
            
            <div className="hero-benefits__item">
              <img src="" alt="" />
              <h4 className="hero-benefits__item-title">Ludique et captivant</h4>
              <p className="hero-benefits__item-description">Un format court et vivant (loin des manuels scolaires barbants) pour donner le goût de lire sans pression.</p>
            </div>
          </div>
        </HeroContent>

        <HeroVisual>
          <HeroImage
            src="/images/hero/hero-tadara.jpg"
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

const HeroBrand = styled.div`
  margin-bottom: clamp(1.25rem, 3.2vw, 2rem);
  flex-shrink: 0;

  a {
    display: inline-block;
    line-height: 0;
    text-decoration: none;
  }
`

const HeroLogo = styled.img`
  display: block;
  width: clamp(128px, 26vw, 220px);
  height: auto;
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