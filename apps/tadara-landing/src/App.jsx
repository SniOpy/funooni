import { createGlobalStyle } from 'styled-components'
import Hero from './sections/hero/components/hero/Hero'
import { tadaraTheme } from './designSystem'

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
    </>
  )
}

export default App
