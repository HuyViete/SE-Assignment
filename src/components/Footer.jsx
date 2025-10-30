import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function Footer() {
  return (
    <Box component="footer" sx={{ mt: { xs: 4, sm: 6 }, mb: { xs: 2, sm: 3 }, px: 2 }}>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
      >
        COS30049 Computing Technology Innovation Project | Semester 2, 2025
      </Typography>
    </Box>
  )
}

export default Footer