import { Box, Button, Modal, Typography } from '@mui/material'
import AppBar from '../../components/AppBar'
import ListItems from '../../components/ListItems'
import AddItem from '../../components/AddItem'
import ModalAddItem from '../../components/AddItem/Modal'
import Card from '../../components/Card'
import { useAppContext } from '../../context/appContext'
import { styles } from './styles'

const ToDoList: React.FC<{}> = () => {
  const {
    confirmationModal,
    handleCloseConfirmModal,
    handleDeleteCompletedTasks,
    handleDeleteAllTasks,
  } = useAppContext()

  const { open, action } = confirmationModal

  const handleAction = () => {
    action === 'deleteAll'
      ? handleDeleteAllTasks()
      : handleDeleteCompletedTasks()
    handleCloseConfirmModal()
  }

  return (
    <Card>
      <AppBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flexGrow: 1,
          alignItems: 'center',
          maxHeight: '89%',
          overflowY: 'auto',
        }}
      >
        <ListItems />
        <AddItem />
        <ModalAddItem />
        <Modal open={open} onClose={handleCloseConfirmModal}>
          <Box sx={({ palette }) => styles(palette).ModalContainer}>
            <Typography sx={({ palette }) => styles(palette).modalTitle}>
              {`${
                action === 'deleteAll'
                  ? 'Borrar todas las tareas'
                  : 'Borrar las tareas completadas'
              }`}
            </Typography>

            <Box sx={({ palette }) => styles(palette).modalButtonContainer}>
              <Button
                type='submit'
                size='small'
                disableRipple
                onClick={handleCloseConfirmModal}
                variant='contained'
                color='inherit'
                sx={({ palette }) => styles(palette).modalButton}
              >
                Cancelar
              </Button>

              <Button
                variant='contained'
                type='submit'
                size='small'
                disableRipple
                onClick={handleAction}
                color='error'
              >
                Borrar
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Card>
  )
}

export default ToDoList
