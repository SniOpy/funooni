import styled from "styled-components"
import HeroContent from "./HeroContent"

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
  padding: 50px 70px;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default HeroInner