import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../../context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const addItemModalContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '400px',
    backgroundColor: palette.addItem.modal[darkMode],
    padding: '16px',
    borderRadius: '8px',
  }

  return { addItemModalContainer }
}
