import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { useAppContext } from '../../../context/appContext'
import { Box } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { styles } from './styles'

const SwitchMode: React.FC<{}> = () => {
  const { darkMode, toggleDarkMode } = useAppContext()

  return (
    <Box sx={({ palette }) => styles(palette).navBarThemeSelectorContainer}>
      <FormControlLabel
        sx={({ palette }) => styles(palette).navBarThemeSelectorFormController}
        label=''
        control={
          <Switch
            checked={darkMode === 'dark' ? true : false}
            onChange={() => toggleDarkMode()}
            sx={({ palette }) => styles(palette).navBarThemeSelectorSwitch}
          />
        }
      />
      <Box
        sx={({ palette }) => styles(palette).navBarThemeSelectorIconsContainer}
      >
        <LightModeOutlinedIcon
          fontSize='small'
          sx={({ palette }) => styles(palette).navBarThemeSelectorIconsLight}
        />
        <DarkModeOutlinedIcon
          fontSize='small'
          sx={({ palette }) => styles(palette).navBarThemeSelectorIconsDark}
        />
      </Box>
    </Box>
  )
}
export default SwitchMode
