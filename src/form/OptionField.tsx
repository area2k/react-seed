import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import FormElement from '@/components/FormElement'
import Option from '@/components/Option'

type OptionProps = Omit<ComponentProps<typeof Option>, 'id' | 'value' | 'onChange'>

type Props = OptionProps & {
  fieldId: string
  label?: string
}

const OptionField = ({ fieldId, label, ...props }: Props) => {
  const { value, setValue } = useField<boolean>(fieldId)

  return (
    <FormElement>
      <Option
        type='checkbox'
        {...props}
        id={fieldId}
        checked={value}
        label={label}
        name={fieldId}
        onChange={(ev) => setValue(ev.currentTarget.checked)}
      />
    </FormElement>
  )
}

export default OptionField
