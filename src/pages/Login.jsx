import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/LoginHeader'
import Footer from '../components/Footer/LoginFooter'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  Card,
  CardContent
} from '@mui/material'
import {
  PersonAdd as PersonAddIcon,
  School as SchoolIcon,
  MenuBook as MenuBookIcon
} from '@mui/icons-material'

function RoleCard({ icon, title, description, selected, onClick }) {
  return (
    <Card
      sx={{
        width: 200,
        cursor: 'pointer',
        transition: 'all 0.3s',
        border: 1,
        borderColor: 'divider',
        outline: selected ? '2px solid' : 'none',
        outlineColor: 'primary.main',
        outlineOffset: '-1px',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
      onClick={onClick}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
          py: 3
        }}
      >
        <Box sx={{ color: 'primary.main', fontSize: 48 }}>
          {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: '0.875rem' }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

function Login() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const roles = [
    {
      id: 'admin',
      icon: <PersonAddIcon sx={{ fontSize: 48 }} />,
      title: 'Admin',
      description: 'Manage system users and settings.'
    },
    {
      id: 'tutor',
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      title: 'Tutor',
      description: 'Educate and mentor students, track progress.'
    },
    {
      id: 'student',
      icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
      title: 'Student',
      description: 'Access learning materials and courses.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate role selection
    if (!selectedRole) {
      alert('Please select a role before signing in')
      return
    }

    // Navigate to appropriate dashboard based on role
    switch (selectedRole) {
    case 'admin':
      navigate('/admin/dashboard')
      break
    case 'tutor':
      navigate('/tutor/dashboard')
      break
    case 'student':
      navigate('/student/dashboard')
      break
    default:
      break
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default'
      }}
    >
      <Header />
      {/* <Toolbar /> */}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          py: 6
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Welcome Back to EduConnect
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Choose your role to continue your journey.
            </Typography>
          </Box>

          {/* Role Selection Cards */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 6,
              flexWrap: 'wrap'
            }}
          >
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                icon={role.icon}
                title={role.title}
                description={role.description}
                selected={selectedRole === role.id}
                onClick={() => setSelectedRole(role.id)}
              />
            ))}
          </Box>

          {/* Login Form */}
          <Box sx={{ maxWidth: 560, mx: 'auto' }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.paper'
                  }
                }}
              />

              <TextField
                fullWidth
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.paper'
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
              >
                Sign In
              </Button>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Link href="#" underline="hover" variant="body2" color="primary">
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

export default Login
