import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const appContainer = {
    backgroundColor: palette.app.list[darkMode],
    width: '40vw',
    height: '70vh',
    minWidth: '350px',
    minHeight: '600px',
    maxWidth: '500px',
    maxHeight: '650px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: 3,
    display: 'flex',
    flexDirection: 'column',
  }
  return { appContainer }
}
