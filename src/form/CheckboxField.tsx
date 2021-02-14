import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import Checkbox from '@/components/Switch'
import FormElement from '@/components/FormElement'

type SwitchProps = Omit<ComponentProps<typeof Checkbox>, 'id' | 'value' | 'onChange'>

type Props = SwitchProps & {
  fieldId: string
  label?: string
}

const CheckboxField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<boolean>(fieldId)

  return (
    <FormElement>
      <Checkbox
        {...props}
        id={fieldId}
        checked={value}
        label={label}
        name={fieldId}
        type='checkbox'
        onChange={(ev) => setValue(ev.currentTarget.checked)}
      />
    </FormElement>
  )
}

export default CheckboxField
