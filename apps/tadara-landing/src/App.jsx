import { createGlobalStyle, styled } from 'styled-components'
import Hero from './sections/hero/components/hero/Hero'
import { tadaraTheme } from './designSystem'
import StoryLetter from './sections/storyletter/StoryLetter'
import Content from './sections/content/Content'
import { HeroStoryDivider, StoryContentDivider } from './sections/transitions/SectionDividers'
import Reasons from './sections/reasons/Reasons'

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
      <HeroStoryDivider />
      <StoryLetter />
      <StoryContentDivider />
      <Content />
      <Reasons />
    </Page>
  )
}

export default App
