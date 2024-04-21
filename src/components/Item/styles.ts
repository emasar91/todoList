import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../context/appContext'

export const styles = (
  palette: DefaultTheme,
  completed?: boolean,
  important: string = 'none'
) => {
  const { darkMode } = useAppContext()

  const addItemFormRadio = {
    color: palette.addItem.form.radios[important][darkMode],
    padding: '0',
    margin: '0',
    '&.Mui-checked': {
      color: palette.addItem.form.radios[important][darkMode],
    },
  }

  const listItemContainer = {
    borderRadius: '2rem',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: palette.addItem.button[darkMode],
    marginBottom: '0.5rem',
    paddingBottom: '0',
    paddingTop: '0',
    boxShadow: !completed
      ? `2px 2px 10px ${palette.app.shadow.first[darkMode]},
      -2px -2px 10px ${palette.app.shadow.second[darkMode]}`
      : `inset 3px 3px 10px ${palette.app.shadow.first[darkMode]},
        inset -3px -3px 10px ${palette.app.shadow.second[darkMode]}`,
  }

  const ListItemDescription = {
    color: palette.addItem.form.title[darkMode],
    opacity: completed ? 0.3 : 1,
    maxWidth: '62%',
    width: '600px',
    overflowX: 'hidden',
  }

  return { listItemContainer, ListItemDescription, addItemFormRadio }
}
