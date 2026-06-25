import styled from "styled-components"
import HeroContent from "./HeroContent"

import { tadaraTheme } from "../../../../designSystem"

function HeroInner() {
  return (
    <HeroInnerStyled>
      <div className="logo">
        <img src="/images/hero/tadara.png" alt="logo1" width={180} height={80}/>
        <img src="/images/hero/timbre.png" alt="logo2" width={200} height={100}/>
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

    img:first-child {
      width: clamp(120px, 18vw, 180px);
      height: auto;
    }

    img:last-child {
      width: clamp(140px, 20vw, 200px);
      height: auto;
    }
  }

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    padding: ${tadaraTheme.spacing[6]} ${tadaraTheme.spacing[5]};

    .logo {
      gap: ${tadaraTheme.spacing[4]};
    }
  }
`

export default HeroInner