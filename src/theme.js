import { extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemeSelector: 'class',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#4473AF'
        },
        secondary: {
          main: '#19857b'
        },
        error: {
          main: red[500]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#4473AF'
        },
        secondary: {
          main: '#19857b'
        },
        error: {
          main: red[500]
        }
      }
    }
  }
})

export default theme