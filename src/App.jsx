import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Header from './components/header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />

          <Box>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </Box>

          <Footer />
        </Container>
      </Router>
    </>
  )
}
