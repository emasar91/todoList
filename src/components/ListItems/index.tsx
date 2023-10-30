import { Box, IconButton, List, ListItem, Typography } from '@mui/material'
import { useAppContext } from '../../context/appContext'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'
const ListItems: React.FC<{}> = () => {
  const { tasks } = useAppContext()
  return (
    <Box sx={{ width: '80%' }}>
      <List>
        {tasks.map((task: taskI) => (
          <ListItem
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Typography>{task.task}</Typography>
            <Box>
              <IconButton>
                <DoneAllOutlinedIcon />
              </IconButton>
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ListItems
