import ToDoList from './scene/todoList'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import theme from './theme/theme'
import './index.css'
import { useMemo } from 'react'
import { useAppContext } from './context/appContext'
import { styles } from './styles'

const App: React.FC<{}> = () => {
  const { darkMode } = useAppContext()
  const currentTheme = useMemo(() => createTheme(theme), [darkMode])

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={({ palette }) => styles(palette).appContainer}>
        <CssBaseline />
        <ToDoList />
      </Box>
    </ThemeProvider>
  )
}

export default App
