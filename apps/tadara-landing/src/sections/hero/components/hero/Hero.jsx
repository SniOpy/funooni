import styled from 'styled-components'
import HeroInner from './HeroInner'
import HeroImage from './HeroImage'
import { tadaraTheme } from '../../../../designSystem'

function Hero() {
  return (
    <HeroStyled>
      <HeroInner/>
      <HeroImage/>
    </HeroStyled>
  )
}

const HeroStyled = styled.section`
  display: grid;
  grid-template-columns: ${tadaraTheme.layout.hero.gridDesktop};
  min-height: ${tadaraTheme.layout.hero.minHeight};
  background-color: ${tadaraTheme.colors.background.main};
  padding: 0 clamp(1rem, 2.5vw, 2.3rem) clamp(2.5rem, 6vw, 5rem);

  @media (max-width: ${tadaraTheme.breakpoints.laptop}) {
    grid-template-columns: ${tadaraTheme.layout.hero.gridTablet};
    min-height: auto;
  }
`


export default Hero
