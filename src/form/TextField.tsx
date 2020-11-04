import { useField } from '@area2k/use-form'
import { StitchesProps } from '@stitches/react'

import Input from '@/elements/Input'

import FormElement from '@/components/FormElement'

type InputProps = Omit<StitchesProps<typeof Input>, 'id' | 'value' | 'onChange'>

type Props = InputProps & {
  fieldId: string
  label?: string
}

const TextField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<string>(fieldId)

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <Input
        {...props}
        id={fieldId}
        name={fieldId}
        value={value}
        onChange={(ev) => setValue(ev.currentTarget.value)}
      />
    </FormElement>
  )
}

export default TextField
