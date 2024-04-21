import React, { Component, ReactNode } from 'react'
import {
  Box,
  IconButton,
  ListItem,
  Radio,
  Tooltip,
  Typography,
} from '@mui/material'
import { Key } from 'react'
import { styles } from './styles'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined'
import { TemplateProps } from 'react-draggable-list'
import withAppContext from './withAppContext'

interface ItemProps extends Partial<TemplateProps<unknown, unknown>> {
  item: any // Reemplaza 'any' con el tipo correcto de 'item'
  dragHandleProps: any // Reemplaza 'any' con el tipo correcto de 'dragHandleProps'
  appContext: appContextI // Añade el contexto como prop
}

class ItemClass
  extends Component<ItemProps>
  implements TemplateProps<unknown, unknown>
{
  item: unknown
  itemSelected: number
  anySelected: number
  dragHandleProps: object
  commonProps: unknown
  constructor(props: ItemProps) {
    super(props)
    this.itemSelected = 0 // or any other default value
    this.anySelected = 0 // or any other default value
    this.dragHandleProps = {} // or any other default value
  }

  render(): ReactNode {
    const { item, dragHandleProps, appContext } = this.props
    const { handleCompleteTask, handleOpenModal, handleSetTaskToEdit } =
      appContext

    const { onMouseDown, onTouchStart } = dragHandleProps

    const handleEditTask = (task: taskI) => {
      handleOpenModal()
      handleSetTaskToEdit(task)
    }

    const handleOnTouchStart = (e: React.TouchEvent) => {
      e.preventDefault()
      onTouchStart(e)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
      onMouseDown(e)
    }

    return (
      <>
        <ListItem
          key={item.id as unknown as Key}
          sx={({ palette }) =>
            styles(palette, item.completed).listItemContainer
          }
        >
          <>
            <div
              onTouchStart={handleOnTouchStart}
              onMouseDown={handleMouseDown}
            >
              <Radio
                disableRipple
                checked
                sx={({ palette }) =>
                  styles(palette, item.completed, item.important)
                    .addItemFormRadio
                }
              />

              <IconButton disableRipple>
                <DragHandleOutlinedIcon />
              </IconButton>
            </div>

            <Typography
              onClick={() => handleCompleteTask(item.id)}
              sx={({ palette }) =>
                styles(palette, item.completed).ListItemDescription
              }
            >
              {item.task}
            </Typography>
          </>

          <Box>
            <Tooltip title='Completo' arrow>
              <IconButton color='secondary' disableRipple>
                {item.completed && <DoneAllOutlinedIcon />}
              </IconButton>
            </Tooltip>

            <IconButton onClick={() => handleEditTask(item)}>
              <CreateOutlinedIcon />
            </IconButton>
          </Box>
        </ListItem>
      </>
    )
  }
}

export default withAppContext(ItemClass)
