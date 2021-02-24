import { useField } from '@area2k/use-form'
import { ComponentPropsWithoutRef } from 'react'

import FormElement from '@/components/FormElement'
import TextInput from '@/components/TextInput'

type InputProps = Omit<ComponentPropsWithoutRef<typeof TextInput>, 'id' | 'value' | 'onChange'>

type Props = InputProps & {
  fieldId: string
  label?: string
}

const TextField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<string>(fieldId)

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <TextInput
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
