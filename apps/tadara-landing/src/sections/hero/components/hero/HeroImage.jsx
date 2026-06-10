import styled from "styled-components"
import { tadaraTheme } from "../../../../designSystem"

function HeroImage() {
  return (
    <HeroImageStyled>
      
      </HeroImageStyled>
  )
}
const HeroImageStyled = styled.div`
  position: relative;
  background-image: url('/images/hero/tadara-hero-kids.jpeg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    height: 40%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(199, 220, 227, 0.35) 50%,
      ${tadaraTheme.colors.background.main} 100%
    );
    pointer-events: none;
  }
`
export default HeroImage