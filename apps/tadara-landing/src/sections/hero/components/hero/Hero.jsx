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
  padding: 0 2.3rem;

  @media (max-width: ${tadaraTheme.breakpoints.tablet}) {
    grid-template-columns: ${tadaraTheme.layout.hero.gridTablet};
  }
`


export default Hero
