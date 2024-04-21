import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import Item from '../Item'

import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { useAppContext } from '../../context/appContext'

const DraggableList: React.FC<{ data: taskI[]; onChange: any }> = ({
  data,
  onChange,
}) => {
  const { setNewOrderTasks } = useAppContext()

  const handleDragEnd = (event: any) => {
    const { active, over } = event

    if (!active.id !== over.id) {
      onChange((data: taskI[]) => {
        const oldIndex = data.findIndex((task) => task.id === active.id)
        const newIndex = data.findIndex((task) => task.id === over.id)
        const newOrderArray = arrayMove(data, oldIndex, newIndex)
        setNewOrderTasks(newOrderArray)
        return newOrderArray
      })
    }
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        {data.map((task) => (
          <Item key={task.id} task={task} onChange={onChange} />
        ))}
      </SortableContext>
    </DndContext>
  )
}

export default DraggableList
