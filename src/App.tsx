import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
