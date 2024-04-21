import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useAppContext } from '../../../context/appContext'
import { styles } from './styles'
import FormAddItem from './FormAddItem'

const ModalAddItem: React.FC<{}> = () => {
  const {
    createEditModal,
    handleOpenModal,
    handleSetTaskToEdit,
    handleViewTaskModal,
  } = useAppContext()
  const handleClose = () => {
    if (createEditModal) {
      handleSetTaskToEdit({
        id: '' as idTaskI,
        task: '',
        important: '',
        completed: false,
      })
    }
    handleOpenModal()
    handleViewTaskModal(false)
  }

  return (
    <Modal
      open={createEditModal}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={({ palette }) => styles(palette).addItemModalContainer}>
        <FormAddItem />
      </Box>
    </Modal>
  )
}

export default ModalAddItem
