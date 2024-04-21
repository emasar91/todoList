import { Box, List } from '@mui/material'
import { useAppContext } from '../../context/appContext'

import { useEffect, useState } from 'react'
import DraggableList from '../DraggableList'
const ListItems: React.FC<{}> = () => {
  const { tasks } = useAppContext()

  const [list, setList] = useState(tasks)

  useEffect(() => {
    setList(tasks)
  }, [tasks])

  return (
    <Box
      sx={{
        width: '98%',
        maxHeight: '70vh',
        scrollbarWidth: 'none',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '8px',
      }}
    >
      <List
        sx={{
          scrollbarWidth: 'none',
        }}
      >
        <DraggableList data={list} onChange={setList} />
      </List>
    </Box>
  )
}

export default ListItems
