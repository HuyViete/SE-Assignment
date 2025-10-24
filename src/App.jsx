import * as React from 'react'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  return (
    <FormControl>
      <FormLabel id="demo-theme-toggle">Theme</FormLabel>
      <RadioGroup
        aria-labelledby="demo-theme-toggle"
        name="theme-toggle"
        row
        value={mode}
        onChange={(event) => setMode(event.target.value)}
      >
        <FormControlLabel value="system" control={<Radio />} label="System" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
  )
}

export default function App() {
  return (
    <>
      <ModeSwitcher />
      <hr />
      <div>DE project</div>
      <Typography variant='body' color='text.secondary'>Typography</Typography>
      <br/>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </>
  )
}
