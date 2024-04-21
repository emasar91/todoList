interface appContextI {
  darkMode: string
  createEditModal: boolean
  tasks: taskI[]
  viewTask: boolean
  toggleDarkMode: () => void
  handleOpenModal: () => void
  handleCreateTask: (task: taskI) => void
  handleCompleteTask: (taskId: idTaskI) => void
  handleEditTask: (task: taskI) => void
  handleSetTaskToEdit: (task: taskI) => void
  setNewOrderTasks: (tasks: taskI[]) => void
  handleViewTaskModal: (view: boolean) => void
  handleDeleteCompletedTasks: () => void
  handleDeleteAllTasks: () => void
  handleOpenConfirmModal: ({ open, action }: confirmModalI) => void
  handleCloseConfirmModal: () => void
  taskToEdit: taskI
  confirmationModal: confirmModalI
}

type idTaskI = `${string}-${string}-${string}-${string}-${string}`

interface confirmModalI {
  open: boolean
  action: string
}

interface taskI {
  id: idTaskI
  task: string
  important: string
  completed: boolean
}
