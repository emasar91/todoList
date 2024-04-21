import { useTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useAppContext } from '../../context/appContext'
import styled, { DefaultTheme } from 'styled-components'
const AddItem: React.FC<{}> = () => {
  const { handleOpenModal } = useAppContext()
  const { darkMode } = useAppContext()
  const theme: DefaultTheme = useTheme()

  const handleToggleModal = () => {
    handleOpenModal()
  }

  const Button = styled.div`
    border-radius: 50%;
    margin-bottom: 24px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette.addItem.button[darkMode]};
    box-shadow: 2px 2px 10px ${theme.palette.app.shadow.first[darkMode]},
      -2px -2px 10px ${theme.palette.app.shadow.second[darkMode]};

    &:active {
      box-shadow: inset 3px 3px 10px ${theme.palette.app.shadow.first[darkMode]},
        inset -3px -3px 10px ${theme.palette.app.shadow.second[darkMode]};
    }
  `
  return (
    <Button onClick={() => handleToggleModal()}>
      <AddIcon color='primary' fontSize='medium' />
    </Button>
  )
}

export default AddItem
