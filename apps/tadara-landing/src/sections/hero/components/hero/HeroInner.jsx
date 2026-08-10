import styled from "styled-components"
import HeroContent from "./HeroContent"

import { tadaraTheme } from "../../../../designSystem"

function HeroInner() {
  return (
    <HeroInnerStyled>
      <div className="logo">
        <img src="/images/hero/tadara.png" alt="logo tadara" width={320} height={192}/>
        <img src="/images/hero/timbre.png" alt="image timbre à l'ancienne" width={200} height={100}/>
      </div>
      <HeroContent/>
    </HeroInnerStyled>
  )
}

const HeroInnerStyled = styled.div`
  padding: clamp(2rem, 5vw, 3.125rem) clamp(1rem, 4vw, 4.375rem);

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${tadaraTheme.spacing[4]};

    img:first-child {
      width: clamp(168px, 26vw, 280px);
      height: auto;
      flex-shrink: 0;
    }

    img:last-child {
      width: clamp(120px, 18vw, 200px);
      height: auto;
      flex-shrink: 1;
      min-width: 0;
    }
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${tadaraTheme.spacing[6]} ${tadaraTheme.spacing[5]};

    .logo {
      gap: ${tadaraTheme.spacing[3]};

      img:first-child {
        width: clamp(150px, 42vw, 220px);
      }

      img:last-child {
        width: clamp(100px, 28vw, 150px);
      }
    }
  }
`

export default HeroInner