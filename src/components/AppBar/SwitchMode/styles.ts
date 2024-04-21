import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../../context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const navBarThemeSelectorIconsLight = {
    color:
      darkMode === 'light'
        ? palette.navBar.themeSelector.active[darkMode]
        : palette.navBar.themeSelector.inactive[darkMode],
  }

  const navBarThemeSelectorIconsDark = {
    color:
      darkMode === 'dark'
        ? palette.navBar.themeSelector.active[darkMode]
        : palette.navBar.themeSelector.inactive[darkMode],
  }

  const navBarThemeSelectorIconsContainer = { marginTop: '-8px', width: '40px' }

  const navBarThemeSelectorSwitch = {
    '.MuiSwitch-root': {
      padding: '10px',
    },
    '.MuiSwitch-switchBase:hover': {
      backgroundColor: 'transparent',
    },
    '.MuiSwitch-switchBase': {
      color: palette.navBar.themeSelector.active[darkMode],
      padding: '14px',
    },
    '.MuiSwitch-thumb': {
      width: '10px',
      height: '10px',
    },

    '.MuiSwitch-track': {
      background: palette.app.background[darkMode],
      boxShadow: `5px 5px 10px ${palette.app.shadow.first[darkMode]},-5px -5px 10px ${palette.app.shadow.second[darkMode]}`,
    },

    '.MuiSwitch-switchBase.Mui-checked:hover': {
      backgroundColor: 'transparent',
    },
    '.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      backgroundColor: 'transparent',
    },
  }

  const navBarThemeSelectorFormController = {
    margin: '0px',
  }

  const navBarThemeSelectorContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return {
    navBarThemeSelectorIconsLight,
    navBarThemeSelectorIconsDark,
    navBarThemeSelectorIconsContainer,
    navBarThemeSelectorSwitch,
    navBarThemeSelectorContainer,
    navBarThemeSelectorFormController,
  }
}
