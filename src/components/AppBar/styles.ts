import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const navBarContainer = {
    backgroundColor: palette.navBar.background[darkMode],
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
  }

  const titleNavBar = {
    width: '100%',
    textAlign: 'center',
    color: palette.navBar.title[darkMode],
    marginRight: '-74px',
  }
  return { navBarContainer, titleNavBar }
}
