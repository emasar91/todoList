import { Box, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { styles } from './styles'
import { useAppContext } from '../../context/appContext'
const AddItem: React.FC<{}> = () => {
  const { handleOpenModal } = useAppContext()
  const handleClose = () => handleOpenModal()
  return (
    <Box sx={({ palette }) => styles(palette).addItemContainer}>
      <IconButton
        sx={({ palette }) => styles(palette).iconAddItemContainer}
        onClick={() => handleClose()}
      >
        <AddIcon color='primary' fontSize='medium' />
      </IconButton>
    </Box>
  )
}

export default AddItem
