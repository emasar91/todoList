interface Item {
  item: taskI
  dragHandleProps: dragHandleProps
  handleEditTask: (task: taskI) => void
  handleCompleteTask: (taskId: idTaskI) => void
}

interface dragHandleProps {
  onMouseDown: (e: React.MouseEvent) => void
  onTouchStart: (e: React.TouchEvent) => void
}
