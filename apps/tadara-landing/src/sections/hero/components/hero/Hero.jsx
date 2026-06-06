import styled from 'styled-components'
import HeroInner from './HeroInner'
import HeroImage from './HeroImage'

function Hero() {
  return (
    <HeroStyled>
      <HeroInner/>
      <HeroImage/>
    </HeroStyled>
  )
}

const HeroStyled = styled.section`
 
`


export default Hero
