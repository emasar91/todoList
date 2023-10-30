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
    width: '62px',
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
