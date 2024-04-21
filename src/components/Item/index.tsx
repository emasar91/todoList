import {
  Box,
  IconButton,
  ListItem,
  Radio,
  Tooltip,
  Typography,
} from '@mui/material'
import { styles } from './styles'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { ItemProps } from './item.interface'
import { Key } from 'react'
import { useAppContext } from '../../context/appContext'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Item: React.FC<ItemProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id, resizeObserverConfig: {} })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  const appContext = useAppContext()

  const {
    handleCompleteTask,
    handleOpenModal,
    handleSetTaskToEdit,
    handleViewTaskModal,
  } = appContext
  const handleEditTask = (task: taskI) => {
    handleOpenModal()
    handleSetTaskToEdit(task)
  }

  const handleViewTask = (task: taskI) => {
    handleOpenModal()
    handleViewTaskModal(true)
    handleSetTaskToEdit(task)
  }

  const styleButton = {
    margin: ' 0 2px',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }

  return (
    <>
      <ListItem
        key={task.id as unknown as Key}
        sx={({ palette }) => styles(palette, task.completed).listItemContainer}
        style={style}
      >
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Radio
              disableRipple
              checked
              sx={({ palette }) =>
                styles(palette, task.completed, task.important).addItemFormRadio
              }
            />

            <IconButton
              disableRipple
              ref={setNodeRef}
              {...attributes}
              {...listeners}
            >
              <DragHandleOutlinedIcon />
            </IconButton>
          </div>

          <Typography
            onClick={() => handleCompleteTask(task.id)}
            sx={({ palette }) =>
              styles(palette, task.completed).ListItemDescription
            }
          >
            {task.task}
          </Typography>
        </>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {task.completed && (
            <Tooltip title='Completado' arrow>
              <IconButton color='secondary' disableRipple sx={styleButton}>
                <DoneAllOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
          {task.task.length > 30 && (
            <Tooltip title='Ver tarea' arrow>
              <IconButton
                onClick={() => handleViewTask(task)}
                disableRipple
                sx={styleButton}
              >
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title='Editar' arrow>
            <IconButton
              onClick={() => handleEditTask(task)}
              disableRipple
              sx={styleButton}
            >
              <CreateOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </ListItem>
    </>
  )
}

export default Item
