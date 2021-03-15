import { useField } from '@area2k/use-form'

import FormElement from '@/components/FormElement'
import Slider, { ValueSliderProps } from '@/components/Slider'

type SliderProps = Omit<ValueSliderProps, 'id' | 'value' | 'onChange'>

type Props = SliderProps & {
  fieldId: string
  label?: string
}

const ValueSliderField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<number>(fieldId)

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <Slider.Value
        {...props}
        id={fieldId}
        value={value}
        onChange={setValue}
      />
    </FormElement>
  )
}

export default ValueSliderField
