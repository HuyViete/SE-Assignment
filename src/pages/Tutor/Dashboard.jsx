import React from 'react'
import Header from '../../components/Header/TutorHeader'
import Footer from '../../components/Footer/Footer'

import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


function TutorDashboard() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header />
      <Toolbar />
      <Box component="main" sx={{ flexGrow: 1, py: 1 }}>
        <Container sx={{ maxWidth: 'lg' }}>
          <Box>
            <Typography variant='h5' sx={{ fontWeight: 700 }}>
              Welcome, Tutor!
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default TutorDashboard