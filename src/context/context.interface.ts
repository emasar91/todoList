interface appContextI {
  darkMode: string
  createEditModal: boolean
  tasks: taskI[]
  toggleDarkMode: () => void
  handleOpenModal: () => void
  handleCreateTask: (task: taskI) => void
  handleCompleteTask: (taskId: number) => void
  handleEditTask: (task: taskI) => void
}

interface idTaskI {
  id: `${string}-${string}-${string}-${string}-${string}`
}

interface taskI {
  id: idTaskI
  task: string
  important: string
  completed: boolean
}
