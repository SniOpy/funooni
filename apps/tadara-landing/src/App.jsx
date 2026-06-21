import { createGlobalStyle, styled } from 'styled-components'
import Hero from './sections/hero/components/hero/Hero'
import { tadaraTheme } from './designSystem'
import StoryLetter from './sections/storyletter/StoryLetter'
import Content from './sections/content/Content'
import Reasons from './sections/reasons/Reasons'
import MoreLetter from './sections/more-letter/MoreLetter'
import WhyStart from './sections/whystart/WhyStart'
import Questions from './sections/questions/Questions'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${tadaraTheme.colors.background.soft};
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

function App() {
  return (
    <Page>
      <GlobalStyle />
      <Hero />
      <StoryLetter />
      <Content />
      <Reasons />
      <MoreLetter />
      <WhyStart />
      <Questions />

    </Page>
  )
}

export default App
