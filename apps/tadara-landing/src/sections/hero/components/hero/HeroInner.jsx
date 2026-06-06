import styled from "styled-components"
import HeroContent from "./HeroContent"

function HeroInner() {
  return (
    <HeroInnerStyled>
      <div className="logo">
        <img src="/images/hero/tadara.png" alt="logo1" width={200} height={100}/>
        <img src="/images/hero/tadara.png" alt="logo2" width={200} height={100}/>
      </div>
      <HeroContent/>
    </HeroInnerStyled>
  )
}

const HeroInnerStyled = styled.div`
  border: 1px solid red;
`

export default HeroInner