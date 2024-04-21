import { createContext, useContext, useState } from 'react'

const initAppContext = {
  darkMode: 'light',
  createEditModal: false,
  toggleDarkMode: () => {},
  handleOpenModal: () => {},
  handleCreateTask: () => {},
  handleCompleteTask: () => {},
  handleEditTask: () => {},
  handleSetTaskToEdit: () => {},
  setNewOrderTasks: () => {},
  handleViewTaskModal: () => {},
  handleDeleteCompletedTasks: () => {},
  handleDeleteAllTasks: () => {},
  handleOpenConfirmModal: () => {},
  handleCloseConfirmModal: () => {},
  tasks: [],
  viewTask: false,
  taskToEdit: {
    id: `` as idTaskI,
    task: '',
    important: '',
    completed: false,
  },
  confirmationModal: {
    open: false,
    action: '',
  },
}

const AppContext = createContext<appContextI>(initAppContext)

const AppContextProvider = (props: any) => {
  const taskFromStorage = localStorage.getItem('tasks') as string
  const darkModeFromStorage = localStorage.getItem('darkMode') as string
  const [darkMode, setDarkMode] = useState<string>(
    JSON.parse(darkModeFromStorage) || initAppContext.darkMode
  )
  const [viewTask, setViewTask] = useState<boolean>(initAppContext.viewTask)
  const [tasks, setTasks] = useState<taskI[]>(
    JSON.parse(taskFromStorage) || initAppContext.tasks
  )
  const [taskToEdit, setTaskToEdit] = useState<taskI>(initAppContext.taskToEdit)
  const [createEditModal, setCreateEditModal] = useState(
    initAppContext.createEditModal
  )
  const [confirmationModal, setConfirmationModal] = useState<confirmModalI>(
    initAppContext.confirmationModal
  )

  const toggleDarkMode = (): void => {
    const mode = darkMode === 'light' ? 'dark' : 'light'
    setDarkMode(mode)
    localStorage.setItem('darkMode', JSON.stringify(mode))
  }

  const handleOpenModal = (): void => {
    setCreateEditModal(!createEditModal)
  }

  const handleViewTaskModal = (view: boolean): void => {
    setViewTask(view)
  }

  const handleCreateTask = (task: taskI): void => {
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    setTasks([...tasks, task])
  }

  const handleCompleteTask = (id: idTaskI): void => {
    setTasks(
      tasks.map((task) =>
        task.id !== id ? task : { ...task, completed: !task.completed }
      )
    )
  }

  const setNewOrderTasks = (tasks: taskI[]): void => {
    setTasks(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const handleSetTaskToEdit = (task: taskI): void => {
    setTaskToEdit(task)
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

  const handleDeleteAllTasks = (): void => {
    setTasks([])
    localStorage.setItem('tasks', JSON.stringify([]))
  }

  const handleDeleteCompletedTasks = (): void => {
    setTasks(tasks.filter((task) => !task.completed))
    localStorage.setItem(
      'tasks',
      JSON.stringify(tasks.filter((task) => !task.completed))
    )
  }

  const handleOpenConfirmModal = ({ open, action }: confirmModalI): void => {
    setConfirmationModal({ open, action })
  }

  const handleCloseConfirmModal = (): void => {
    setConfirmationModal(initAppContext.confirmationModal)
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        handleOpenModal,
        createEditModal,
        taskToEdit,
        tasks,
        viewTask,
        confirmationModal,
        handleCreateTask,
        handleCompleteTask,
        handleEditTask,
        handleSetTaskToEdit,
        setNewOrderTasks,
        handleViewTaskModal,
        handleDeleteAllTasks,
        handleDeleteCompletedTasks,
        handleOpenConfirmModal,
        handleCloseConfirmModal,
      }}
      {...props}
    />
  )
}

export default AppContextProvider

export function useAppContext() {
  return useContext(AppContext)
}
