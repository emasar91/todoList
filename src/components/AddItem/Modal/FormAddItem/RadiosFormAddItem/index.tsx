import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { styles } from '../styles'

const RadiosFormAddItem = ({
  values,
  setFieldValue,
}: RadiosFormAddItemProps) => {
  const radioOptions = ['none', 'mid', 'high']
  return (
    <RadioGroup
      name={'important'}
      value={values.important}
      onChange={(event) => {
        setFieldValue('important', event.currentTarget.value)
      }}
    >
      <Box sx={({ palette }) => styles(palette).addItemFormController}>
        {radioOptions.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            label=''
            sx={({ palette }) => styles(palette).addItemFormController}
            control={
              <Radio
                sx={({ palette }) => styles(palette, option).addItemFormRadio}
              />
            }
          />
        ))}
      </Box>
    </RadioGroup>
  )
}

export default RadiosFormAddItem
