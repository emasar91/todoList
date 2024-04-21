import ToDoList from './scene/todoList'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
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
