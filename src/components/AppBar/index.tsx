import { Box, Typography } from '@mui/material'
import { styles } from './styles'
import SelectorMode from './SelectorMode'
import TasksActions from './SwitchMode copy'

const AppBar: React.FC<{}> = () => {
  return (
    <Box sx={({ palette }) => styles(palette).navBarContainer}>
      <TasksActions />
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={({ palette }) => styles(palette).titleNavBar}>
          Todas las Tareas
        </Typography>
      </Box>

      <SelectorMode />
    </Box>
  )
}

export default AppBar
