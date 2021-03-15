import { useField } from '@area2k/use-form'

import FormElement from '@/components/FormElement'
import Slider, { RangeSliderProps } from '@/components/Slider'

type SliderProps = Omit<RangeSliderProps, 'id' | 'value' | 'onChange'>

type Props = SliderProps & {
  fieldId: string
  label?: string
}

const RangeSliderField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<number[]>(fieldId)

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <Slider.Range
        {...props}
        id={fieldId}
        value={value}
        onChange={setValue}
      />
    </FormElement>
  )
}

export default RangeSliderField
