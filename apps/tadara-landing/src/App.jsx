import { createGlobalStyle } from 'styled-components'
import Hero from './sections/hero/components/hero/Hero'
import { tadaraTheme } from './designSystem'
import StoryLetter from './sections/storyletter/StoryLetter'
import Content from './sections/content/Content'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${tadaraTheme.colors.background.main};
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
        <Hero />
        <StoryLetter />
        <Content />
    </>
  )
}

export default App
