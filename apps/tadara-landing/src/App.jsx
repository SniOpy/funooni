import { createGlobalStyle, styled } from 'styled-components'
import Hero from './sections/hero/components/hero/Hero'
import { tadaraTheme } from './designSystem'
import StoryLetter from './sections/storyletter/StoryLetter'
import Content from './sections/content/Content'
import {
  ContentReasonsDivider,
  HeroStoryDivider,
  ReasonsMoreLetterDivider,
  StoryContentDivider,
} from './sections/transitions/SectionDividers'
import Reasons from './sections/reasons/Reasons'
import MoreLetter from './sections/more-letter/MoreLetter'

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
      <ContentReasonsDivider />
      <Reasons />
      <ReasonsMoreLetterDivider />
      <MoreLetter />
    </Page>
  )
}

export default App
