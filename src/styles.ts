import { DefaultTheme } from 'styled-components'
import { useAppContext } from './context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const appContainer = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette?.app?.background[darkMode],
  }
  return { appContainer }
}
