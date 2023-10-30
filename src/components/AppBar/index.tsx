import { Box, Typography } from '@mui/material'
import { styles } from './styles'
import SelectorMode from './SelectorMode'

const AppBar: React.FC<{}> = () => {
  return (
    <Box sx={({ palette }) => styles(palette).navBarContainer}>
      <Typography sx={({ palette }) => styles(palette).titleNavBar}>
        Todas las Tareas
      </Typography>
      <SelectorMode />
    </Box>
  )
}

export default AppBar
