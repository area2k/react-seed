import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import FormElement from '@/components/FormElement'
import Switch from '@/components/Switch'

type SwitchProps = Omit<ComponentProps<typeof Switch>, 'id' | 'value' | 'onChange'>

type Props = SwitchProps & {
  fieldId: string
  label?: string
}

const SwitchField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<boolean>(fieldId)

  return (
    <FormElement>
      <Switch
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

export default SwitchField
