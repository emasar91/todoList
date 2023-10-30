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
    borderRadius: '50px',
    boxShadow: '0px 0px 10px -4px #0072CE',
    '& .MuiInputBase-root': {
      borderRadius: '50px',
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

  return {
    addItemFormImportantContainer,
    addItemFormButtonContainer,
    addItemFormTextField,
    addItemFormController,
    addItemImportantTitle,
    addItemFormRadio,
    addItemTitle,
  }
}
