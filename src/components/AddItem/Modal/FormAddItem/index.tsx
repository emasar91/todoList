import * as React from 'react'
import { Formik, Form } from 'formik'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import RadiosFormAddItem from './RadiosFormAddItem'
import { styles } from './styles'
import { useAppContext } from '../../../../context/appContext'
import * as yup from 'yup'

const FormAddItem: React.FC<{}> = () => {
  const initialValues: FormValues = { task: '', important: 'none' }

  const { darkMode, handleCreateTask, handleOpenModal } = useAppContext()

  const InputLabelProps = {
    style: {
      color: darkMode === 'dark' ? 'white' : 'black',
    },
  }

  const taskSchema = yup.object({
    task: yup.string().required('La tarea es obligatoria'),
    important: yup.string().required('Importancia es obligatoria'),
  })

  const handleSubmit = (values: FormValues) => {
    const newTask: taskI = {
      id: window?.crypto?.randomUUID(),
      task: values.task,
      important: values.important,
      completed: false,
    }
    handleCreateTask(newTask)
    handleOpenModal()
  }

  return (
    <Box>
      <Typography sx={({ palette }) => styles(palette).addItemTitle}>
        Crear Tarea
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <TextField
              id='outlined-basic'
              label='Tarea'
              variant='outlined'
              color='secondary'
              name='task'
              sx={({ palette }) => styles(palette).addItemFormTextField}
              onChange={(event) => {
                setFieldValue('task', event.currentTarget.value)
              }}
              InputLabelProps={InputLabelProps}
            />
            {errors.task && <p>{errors.task}</p>}

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
            <Box
              sx={({ palette }) => styles(palette).addItemFormButtonContainer}
            >
              <Button
                variant='contained'
                type='submit'
                color='secondary'
                size='small'
                disabled={!values.task}
              >
                Crear
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default FormAddItem
