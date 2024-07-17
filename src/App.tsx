import Header from './components/Header/Header'
import { Container } from './styles/Container.styled'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyled'
import content from './content.d'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
