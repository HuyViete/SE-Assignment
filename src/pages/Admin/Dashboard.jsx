import React from 'react'
import Header from '../../components/Header/StudentHeader'
import Footer from '../../components/Footer/Footer'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function AdminDashboard() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 1 }}>
        <Container>
          <Box>
            <Typography>
              Welcome, Admin!
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default AdminDashboard