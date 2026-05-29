import './hero.css'
import styled from 'styled-components'
import { theme } from '../../designSystem'

const HERO_BENEFITS = [
  {
    icon: '/images/hero/icons/cadeau.svg',
    title: 'Zéro écran',
    description:
      'Une expérience 100% physique et tactile (papier, cire, vrais objets) qu’aucun algorithme ne peut remplacer.',
  },
  {
    icon: '/images/hero/icons/enveloppe.svg',
    title: 'Livré chez lui',
    description:
      'Chaque mois, une enveloppe vintage personnalisée directement dans sa boîte aux lettres.',
  },
  {
    icon: '/images/hero/icons/medaille.svg',
    title: 'Fier de ses racines',
    description:
      'Un contenu valorisant pour nourrir son identité, comprendre son histoire et grandir fier de qui il est.',
  },
  {
    icon: '/images/hero/icons/ludique.svg',
    title: 'Ludique & Captivant',
    description:
      'Un format court et vivant (loin des manuels scolaires barbants) pour donner le goût de lire sans pression.',
  },
]

function Hero() {
  return (
    <HeroStyled >
      <div className="hero__inner">
        <HeroContentStyled>
          <HeroHeaderStyled>
            <a href="/" className="hero__logo-link" aria-label="Tadara — accueil">
              <img
                className="hero__logo"
                src="/images/hero/tadara.png"
                alt="TADARA"
                width={180}
                height={70}
                decoding="async"
              />
            </a>
          </HeroHeaderStyled>

          <HeroTitleStyled>
            <h1>
              Votre enfant utilise
              <br /> chaque jour un héritage <br />
              de{' '}
              <span className="hero-title__highlight">1200&nbsp;ans.</span>
            </h1>

            <div className="hero-subline-stack">
              <img
                src="/images/hero/icons/paint.png"
                alt=""
                className="paint-background"
                aria-hidden="true"
                decoding="async"
              />
              <h2 className="hero-subline">Sans le savoir</h2>
            </div>
          </HeroTitleStyled>

          <HeroIntroStyled>
            <p className="hero-intro__lead">
              Le savon qu&apos;il utilise, les chiffres qu&apos;il écrit à l&apos;école,<br/> le mot
              &quot;algorithme&quot;...La civilisation arabo-musulmane a façonné son quotidien.
            </p>
            <p className="hero-intro__cta">
              <strong>Tadara</strong>
              {' '}
              est la lettre mensuelle qui révèle cette histoire fascinante dès 8 ans.
            </p>
          </HeroIntroStyled>

          <HeroOfferStyled>
            <HeroOfferTitleStyled>
              <img
                className="hero-offer__icon"
                src="/images/hero/icons/family.png"
                alt=""
                  width={60}
                  height={60}
                aria-hidden="true"
                decoding="async"
              />
              <h3 id="hero-offer-title" className="hero-offer__title">
                Rejoignez les 100 Familles Fondatrices avant le lancement de septembre.
              </h3>
            </HeroOfferTitleStyled>
            <p className="hero-offer__description">
              Inscrivez-vous gratuitement sur la liste d&apos;attente pour bloquer votre tarif pionnier
              de 10€/mois garanti à vie (au lieu du futur tarif public) et obtenir votre accès prioritaire.
            </p>
            <FormStyled action="#" method="post">
              <label className="hero-offer__field">
                <span className="visually-hidden">Adresse email</span>
                <input
                  className="hero-offer__input"
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse email"
                  autoComplete="email"
                  required
                />
                <span className="hero-offer__input-icon" aria-hidden="true">
                  <img src="/images/hero/icons/enveloppe.svg" alt="" width={22} height={22} decoding="async" />
                </span>
              </label>
              <button className="hero-offer__submit" type="submit">
                Réserver mon accès prioritaire (gratuit)
              </button>
            </FormStyled>
          </HeroOfferStyled>

          <HeroBenefitsStyled role="list">
            {HERO_BENEFITS.map((item) => (
              <li className="hero-benefits__item" key={item.title}>
                <span className="hero-benefits__icon">
                  <img src={item.icon} alt="" decoding="async" width={90} height={90}/>
                </span>
                <h4 className="hero-benefits__title">{item.title}</h4>
                <p className="hero-benefits__description">{item.description}</p>
              </li>
            ))}
          </HeroBenefitsStyled>
        </HeroContentStyled>

        <div className="hero__visual">
          <img
            className="hero__picture"
            src="/images/hero/hero-tadara.jpg"
            alt="Enfant découvrant une enveloppe Tadara parmi livres et objets sur un bureau."
            decoding="async"
          />
          <div className="hero__fade" aria-hidden="true" />
        </div>
      </div>
    </HeroStyled>
  )
}

const HeroStyled = styled.div`
`;

const HeroContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin-inline: auto;
  padding-bottom: 0.75rem;

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
`;

const HeroHeaderStyled = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
`;

const HeroIntroStyled = styled.div`
  width: 410px;
  padding: 0 0.5rem;
  font-size: 15px;
  line-height: 1.35;
  color: ${theme.colors.brand.primaryLight};
  font-family: ${theme.typography.fontFamily.body};

  p + p {
    margin-top: 0.35rem;
  }
`


/* Bloc titre : serif sur le h1 de façon explicite ; le sous-titre garde aussi la pile titres comme avant le wrapper générique. */
const HeroTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['3xl']};
  text-shadow: ${theme.shadows.vintageCard};
  line-height: 1.05;

  h1 {
    margin-bottom: 0.35rem;
  }

  .hero-title__highlight {
    color: ${theme.colors.brand.secondary};
    font-size: clamp(2rem, 4.5vw + 1rem, 4.5rem);
    line-height: 1;
  }

  /* Empile décoration + H2 dans la même case : centrés ensemble sur tous les viewports */
  .hero-subline-stack {
    display: grid;
    justify-items: center;
    align-items: center;
    justify-self: start;
    align-self: start;
    padding-left: clamp(1.25rem, 10vw - 2rem, 4.5rem);
    margin-top: -0.15rem;
    min-width: 0;
    width: max-content;
    max-width: 100%;
  }

  .hero-subline-stack .paint-background,
  .hero-subline-stack .hero-subline {
    grid-area: 1 / 1;
  }

  .paint-background {
    width: clamp(160px, 28vw + 1.5rem, 240px);
    height: auto;
    z-index: 0;
    pointer-events: none;
    justify-self: center;
    align-self: center;
  }

  .hero-subline {
    margin: 0;
    padding: 0;
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.brand.bgLight};
    z-index: 1;
    position: relative;
    text-align: center;
  }
`

const HeroOfferStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.75rem 1.125rem;
  border:1px solid ${theme.colors.brand.accent};
  border-radius: 10px;
  align-items: stretch;
  justify-content: center;
  width: 100%;

  .hero-offer__description {
    line-height: 1.25;
  }
`

const HeroOfferTitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight:bold;
  font-size: 14px;
  line-height: 1.25;

  img {
    height: auto;
  }
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  margin: 0;

  label {
    margin-bottom: -12px;
  }

  input {
    width: 100%;
    margin: 0;
    padding: 0.5rem 0.75rem;
    border:1px solid ${theme.colors.brand.accent};
    border-radius: 10px;
    font-size: 14px;
    font-family: ${theme.typography.fontFamily.body};
    color: ${theme.colors.brand.primaryLight};
    background-color: ${theme.colors.brand.bgLight};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0.5rem 0.75rem;
    border:1px solid ${theme.colors.brand.primary};
    border-radius: 10px;
    font-size: 14px;
    font-family: ${theme.typography.fontFamily.body};
    color: ${theme.colors.brand.textLight};
    background-color: ${theme.colors.brand.primary};
    text-transform: uppercase;
    text-align: center;
  }
  
`

const HeroBenefitsStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0.25rem 0 0;

  li {
    flex: 1;
    min-width: 0;
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: contain;
    object-position: center;
    border:1px solid ${theme.colors.brand.accent};
    border-radius: 50px;
    
  }

  h4 {
    margin-top: 0.25rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 12px;
    line-height: 1.2;
  }

`

  /* const HeroMainHeading = styled.h1`
  
  color: ${theme.colors.brand.primary};
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-left: 5rem;
  
  span {
    color: ${theme.colors.brand.accent};
    font-size: 64px;
  }

  .hero-subline__text{
    font-size: 24px;
    color: black;
  }
` */

export default Hero
