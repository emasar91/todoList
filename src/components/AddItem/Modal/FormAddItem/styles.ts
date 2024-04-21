import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../../../context/appContext'

export const styles = (palette: DefaultTheme, important: string = 'none') => {
  const { darkMode } = useAppContext()

  const addItemFormController = {
    marginRight: 0,
  }

  const addItemFormRadio = {
    color: palette.addItem.form.radios[important][darkMode],
    '&.Mui-checked': {
      color: palette.addItem.form.radios[important][darkMode],
    },
  }

  const addItemFormTextField = {
    width: '100%',
    padding: '8px 8px 8px 12px',
    borderRadius: '5px',
    color: palette.addItem.form.title[darkMode],
    boxShadow: `inset 1.5px 1.5px 3px ${palette.app.shadow.first[darkMode]}, inset -1.5px -1.5px 3px  ${palette.app.shadow.second[darkMode]}`,
    '.MuiInput-input': {
      padding: 0,
    },
  }

  const addItemTitle = {
    textAlign: 'center',
    fontSize: '16px',
    marginBottom: '24px',
    color: palette.addItem.form.title[darkMode],
  }

  const addItemImportantTitle = {
    color: palette.addItem.form.title[darkMode],
  }

  const addItemFormButtonContainer = {
    justifyContent: 'end',
    display: 'flex',
    marginTop: '32px',
  }

  const addItemFormImportantContainer = {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  }

  const addItemFormButton = {
    color: palette.addItem.form.button[darkMode],
    backgroundColor: palette.addItem.button[darkMode],
    boxShadow: `2px 2px 10px ${palette.app.shadow.first[darkMode]},
      -2px -2px 10px ${palette.app.shadow.second[darkMode]}`,

    '&:active': {
      boxShadow: `inset 3px 3px 10px ${palette.app.shadow.first[darkMode]},
        inset -3px -3px 10px ${palette.app.shadow.second[darkMode]}`,
    },
    '&:hover': {
      backgroundColor: palette.addItem.button[darkMode],
      boxShadow: `2px 2px 10px ${palette.app.shadow.first[darkMode]},
      -2px -2px 10px ${palette.app.shadow.second[darkMode]}`,
    },
  }

  return {
    addItemFormImportantContainer,
    addItemFormButtonContainer,
    addItemFormButton,
    addItemFormTextField,
    addItemFormController,
    addItemImportantTitle,
    addItemFormRadio,
    addItemTitle,
  }
}
