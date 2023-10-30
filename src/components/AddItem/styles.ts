import { DefaultTheme } from 'styled-components'
import { useAppContext } from '../../context/appContext'

export const styles = (palette: DefaultTheme) => {
  const { darkMode } = useAppContext()

  const addItemContainer = {
    boxShadow: 3,
    height: '60px',
    borderRadius: '50%',
    marginBottom: '24px',
    '& :hover': {
      backgroundColor: `${palette.addItem.container.hover[darkMode]} !important`,
    },
  }

  const iconAddItemContainer = {
    backgroundColor: palette.addItem.icon.container[darkMode],
    boxShadow: 3,
    width: '60px',
    height: '60px',
  }

  return { addItemContainer, iconAddItemContainer }
}
