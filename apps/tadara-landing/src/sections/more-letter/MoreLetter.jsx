import styled from 'styled-components'
import { tadaraTheme } from '../../designSystem'

const { colors, typography, spacing } = tadaraTheme

function MoreLetter() {
  return (
    <MoreLetterSectionStyled>
      <MoreLetterTitleStyled>
        <h1 className="moreletter-title">bien plus qu'une simple lettre</h1>
      </MoreLetterTitleStyled>

      <div className='more-letter-content'>

        <div className='more-letter-content-item'>
          <img src="/images/more-letter/1-moreletter.jpeg" alt="more-letter-1" width={450} height={450} className='more-letter-content-item-image' />
          <div className='more-letter-content-item-description'>
            <h2 >Votre enfant découvre
                l’Histoire qu’on lui raconte
                rarement.
            </h2>
            <p>Le café, les chiffres,
                l’algorithme...
                des femmes et des hommes
                qui ont changé le monde,
                mais dont il n’entend jamais
                parler.
            </p>
          </div>
        </div>

        <div className='more-letter-content-item'>
          <img src="/images/more-letter/2-moreletter.jpeg" alt="more-letter-1" width={450} height={450} className='more-letter-content-item-image' />
          <div className='more-letter-content-item-description'>
            <h2>Il lit sans qu’on lui
            demande.</h2>
            <p>Une histoire qu’il lit par
curiosité et qu’il termine par
plaisir.
Parce que l’enveloppe est
arrivé à son nom.
Et parce que cette fois, il
veut savoir la suite.</p>
          </div>
        </div>

        <div className='more-letter-content-item'>
          <img src="/images/more-letter/3-moreletter.jpeg" alt="more-letter-1" width={450} height={450} className='more-letter-content-item-image' />
          <div className='more-letter-content-item-description'>
            <h2>Il vit une experience loin des
            écrans</h2>
            <p>Recevoir une lettre,
collectionner des souvenirs,
écrire à son tour...
Une découverte qui passe par
les mains autant que par
l’imagination.</p>
          </div>
        </div>

      </div>
    </MoreLetterSectionStyled>
  )
}

const MoreLetterSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing[10]};
  padding: ${spacing[20]};
  background-color: ${colors.background.soft};


  .moreletter-title {
    font-size: ${typography.sizes['4xl']};
    text-transform: uppercase;
    font-weight: ${typography.weights.bold};
    color: ${colors.text.primary};
    font-family: ${typography.fonts.heading};
    line-height: ${typography.lineHeights.heading};
    margin: 0;
  }

  .more-letter-content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${spacing[6]};

    .more-letter-content-item {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .more-letter-content-item-description {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    h2 {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: clamp(1.25rem, 2.2vw, 1.625rem);
        font-weight: 700;
        color: ${tadaraTheme.colors.text.primary};
        margin: 0;
        line-height: 1.3;
    }

    p {
        font-family: ${tadaraTheme.typography.fonts.body};
        font-size: clamp(1rem, 2vw, 1.375rem);
        font-weight: 400;
        color: ${tadaraTheme.colors.text.secondary};
        line-height: 1.55;
        margin: 0;
    }

    .more-letter-content-item-image {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50px;
    }

    .more-letter-content-item {
        width: 100%;
    }
  }

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    padding: ${spacing[12]} ${spacing[6]};

    .more-letter-content {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${spacing[10]} ${spacing[5]};

    .more-letter-content {
      grid-template-columns: 1fr;
    }
  }
`

const MoreLetterTitleStyled = styled.div``
export default MoreLetter
