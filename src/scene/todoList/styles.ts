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

  const ModalContainer = {
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

  const modalTitle = {
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: '24px',
    color: palette.addItem.form.title[darkMode],
  }

  const modalButtonContainer = {
    justifyContent: 'end',
    display: 'flex',
    gap: '8px',
    marginTop: '32px',
  }

  const modalButton = {
    color: palette.modal.cancelButton.color[darkMode],
    backgroundColor: palette.modal.cancelButton.background[darkMode],
  }

  return {
    appContainer,
    ModalContainer,
    modalTitle,
    modalButtonContainer,
    modalButton,
  }
}
