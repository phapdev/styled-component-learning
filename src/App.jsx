import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Services from './Services.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './Home.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './styled/theme.jsx'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App;
