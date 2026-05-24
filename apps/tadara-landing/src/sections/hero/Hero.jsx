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
    <HeroStyled className="hero">
      <div className="hero__inner">
        <div className="hero__content">
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

          <div className="hero-intro">
            <p className="hero-intro__lead">
              Le savon qu&apos;il utilise, les chiffres qu&apos;il écrit à l&apos;école, le mot
              &quot;algorithme&quot;... La civilisation arabo-musulmane a façonné son quotidien.
            </p>
            <p className="hero-intro__cta">
              <strong>Tadara</strong>
              {' '}
              est la lettre mensuelle qui révèle cette histoire fascinante dès 8 ans.
            </p>
          </div>

          <aside className="hero-offer" aria-labelledby="hero-offer-title">
            <div className="hero-offer__title-row">
              <img
                className="hero-offer__icon"
                src="/images/hero/icons/famille.svg"
                alt=""
                width={46}
                height={46}
                aria-hidden="true"
                decoding="async"
              />
              <h3 id="hero-offer-title" className="hero-offer__title">
                Rejoignez les 100 Familles Fondatrices avant le lancement de septembre.
              </h3>
            </div>
            <p className="hero-offer__description">
              Inscrivez-vous gratuitement sur la liste d&apos;attente pour bloquer votre tarif pionnier
              de 10€/mois garanti à vie (au lieu du futur tarif public) et obtenir votre accès prioritaire.
            </p>
            <form className="hero-offer__form" action="#" method="post">
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
            </form>
          </aside>

          <ul className="hero-benefits" role="list">
            {HERO_BENEFITS.map((item) => (
              <li className="hero-benefits__item" key={item.title}>
                <span className="hero-benefits__icon">
                  <img src={item.icon} alt="" decoding="async" width={40} height={40}/>
                </span>
                <h4 className="hero-benefits__title">{item.title}</h4>
                <p className="hero-benefits__description">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

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
  padding-left: 5rem;
`;

const HeroHeaderStyled = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
`;


/* Bloc titre : serif sur le h1 de façon explicite ; le sous-titre garde aussi la pile titres comme avant le wrapper générique. */
const HeroTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(0.3rem, 1.2vw, 0.55rem);

  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['3xl']};
  text-shadow: ${theme.shadows.vintageCard};
  line-height: 1.1;

  h1 {
    margin-bottom: 15px;
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
    padding-left: clamp(1.75rem, 12vw - 2rem, 5.3125rem);
    min-width: 0;
    width: max-content;
    max-width: 100%;
  }

  .hero-subline-stack .paint-background,
  .hero-subline-stack .hero-subline {
    grid-area: 1 / 1;
  }

  .paint-background {
    width: clamp(240px, 42vw + 4rem, 340px);
    height: auto;
    z-index: 0;
    pointer-events: none;
    justify-self: center;
    align-self: center;
  }

  .hero-subline {
    margin: 0;
    padding: 0;
    font-size: ${theme.typography.fontSize['4xl']};
    color: ${theme.colors.brand.bgLight};
    z-index: 1;
    position: relative;
    text-align: center;
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
