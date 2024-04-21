import { useAppContext } from '../../../context/appContext'
import { Box, IconButton } from '@mui/material'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined'
import { styles } from './styles'

const SwitchMode: React.FC<{}> = () => {
  const { handleOpenConfirmModal, tasks } = useAppContext()

  const disableDeleteAll = tasks.length === 0

  const disableDeleteCompleted =
    tasks.filter((task) => task.completed).length === 0

  const openModalConfirmDeleteAll = () => {
    handleOpenConfirmModal({ open: true, action: 'deleteAll' })
  }

  const openModalConfirmDeleteCompleted = () => {
    handleOpenConfirmModal({ open: true, action: 'deleteCompleted' })
  }

  return (
    <Box sx={() => styles().navBarTasksActionsIconsContainer}>
      <IconButton
        sx={() => styles(disableDeleteAll).navBarTasksActionsIconButton}
        disableRipple
        onClick={openModalConfirmDeleteAll}
        disabled={disableDeleteAll}
      >
        <DeleteOutlineOutlinedIcon fontSize='small' color='error' />
      </IconButton>
      <IconButton
        sx={() => styles(disableDeleteCompleted).navBarTasksActionsIconButton}
        disableRipple
        onClick={openModalConfirmDeleteCompleted}
        disabled={disableDeleteCompleted}
      >
        <CleaningServicesOutlinedIcon fontSize='small' color='success' />
      </IconButton>
    </Box>
  )
}
export default SwitchMode
