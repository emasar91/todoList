import { Box } from '@mui/material'
import AppBar from '../../components/AppBar'
import ListItems from '../../components/ListItems'
import AddItem from '../../components/AddItem'
import { styles } from './styles'
import ModalAddItem from '../../components/AddItem/Modal'

const ToDoList: React.FC<{}> = () => {
  return (
    <Box sx={({ palette }) => styles(palette).appContainer}>
      <AppBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <ListItems />
        <AddItem />
        <ModalAddItem />
      </Box>
    </Box>
  )
}

export default ToDoList
