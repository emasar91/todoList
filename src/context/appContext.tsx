import { createContext, useContext, useState } from 'react'

const initAppContext = {
  darkMode: 'light',
  createEditModal: false,
  toggleDarkMode: () => {},
  handleOpenModal: () => {},
  handleCreateTask: () => {},
  handleCompleteTask: () => {},
  handleEditTask: () => {},
  tasks: [],
}

const AppContext = createContext<appContextI>(initAppContext)

const AppContextProvider = (props: any) => {
  const [darkMode, setDarkMode] = useState<string>(initAppContext.darkMode)
  const [tasks, setTasks] = useState<taskI[]>(initAppContext.tasks)

  const [createEditModal, setCreateEditModal] = useState(
    initAppContext.createEditModal
  )

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleOpenModal = (): void => {
    setCreateEditModal(!createEditModal)
  }

  const handleCreateTask = (task: taskI): void => {
    setTasks([...tasks, task])
  }

  const handleCompleteTask = (id: idTaskI): void => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleEditTask = (newTask: taskI): void => {
    const taskEdited: taskI = {
      id: newTask.id,
      task: newTask.task,
      important: newTask.important,
      completed: newTask.completed,
    }

    setTasks(
      tasks.map((task: taskI) =>
        task.id === taskEdited.id ? taskEdited : task
      )
    )
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        handleOpenModal,
        createEditModal,
        tasks,
        handleCreateTask,
        handleCompleteTask,
        handleEditTask,
      }}
      {...props}
    />
  )
}

export default AppContextProvider

export function useAppContext() {
  return useContext(AppContext)
}
