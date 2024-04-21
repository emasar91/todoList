import * as React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button, FormControl, Input, Typography } from '@mui/material'
import RadiosFormAddItem from './RadiosFormAddItem'
import { styles } from './styles'
import { useAppContext } from '../../../../context/appContext'
import * as yup from 'yup'
import { useEffect, useRef } from 'react'

const FormAddItem: React.FC<{}> = () => {
  const {
    handleCreateTask,
    handleOpenModal,
    taskToEdit,
    handleEditTask,
    handleSetTaskToEdit,
    viewTask,
  } = useAppContext()

  const initialValues: FormValues = {
    id: taskToEdit.id as idTaskI,
    task: taskToEdit.task,
    important: taskToEdit.important,
    completed: taskToEdit.completed,
  }

  const taskSchema = yup.object({
    task: yup.string().required('La tarea es obligatoria'),
    important: yup
      .string()
      .required('Importancia es obligatoria')
      .oneOf(['none', 'mid', 'high']),
  })

  const handleSubmit = (values: FormValues) => {
    const newTask: taskI = {
      id: window?.crypto?.randomUUID(),
      task: values.task,
      important: values.important,
      completed: false,
    }
    if (initialValues.id) {
      handleEditTask(values)
      handleSetTaskToEdit({
        id: '' as idTaskI,
        task: '',
        important: '',
        completed: false,
      })
    } else {
      handleCreateTask(newTask)
    }
    handleOpenModal()
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current && inputRef.current.value) {
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      )
    }
  }, [inputRef])

  const modalTitle = initialValues.id ? 'Editar' : 'Crear'
  const buttonTitle = initialValues.id ? 'Editar' : 'Crear'

  return (
    <Box>
      <Typography sx={({ palette }) => styles(palette).addItemTitle}>
        {!viewTask && modalTitle}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ values, setFieldValue, errors }) => {
          return (
            <Form>
              <Input
                inputRef={inputRef}
                placeholder='Tarea'
                color='secondary'
                multiline
                maxRows={4}
                inputProps={{ maxLength: 120 }}
                readOnly={viewTask}
                autoFocus
                disableUnderline={true}
                value={values.task}
                name='task'
                sx={({ palette }) => styles(palette).addItemFormTextField}
                onChange={(event) => {
                  setFieldValue('task', event.currentTarget.value)
                }}
              />

              <Typography
                sx={({ palette }) => styles(palette).addItemImportantTitle}
                fontSize={'10px'}
              >
                {`${values.task.length}/120`}
              </Typography>

              {errors.task && (
                <p style={{ margin: 0, fontSize: '10px', color: 'red' }}>
                  {errors.task}
                </p>
              )}
              {errors.important && (
                <p style={{ margin: 0, fontSize: '10px', color: 'red' }}>
                  {errors.important}
                </p>
              )}

              <Box
                sx={({ palette }) =>
                  styles(palette).addItemFormImportantContainer
                }
              >
                <Typography
                  sx={({ palette }) => styles(palette).addItemImportantTitle}
                >
                  Importancia
                </Typography>
                <FormControl component='fieldset'>
                  <RadiosFormAddItem
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </FormControl>
              </Box>
              {!viewTask && (
                <Box
                  sx={({ palette }) =>
                    styles(palette).addItemFormButtonContainer
                  }
                >
                  <Button
                    variant='contained'
                    type='submit'
                    color='inherit'
                    size='small'
                    disabled={!values.task}
                    sx={({ palette }) => styles(palette).addItemFormButton}
                    disableRipple
                  >
                    {buttonTitle}
                  </Button>
                </Box>
              )}
            </Form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default FormAddItem
