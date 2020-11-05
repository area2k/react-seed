import { useField } from '@area2k/use-form'
import { ComponentProps, FC } from 'react'

import FormElement from '@/components/FormElement'
import TextSelect from '@/components/TextSelect'

type TextSelectProps = Omit<ComponentProps<typeof TextSelect>, 'id' | 'status' | 'value' | 'onChange'>

type Props = TextSelectProps & {
  fieldId: string
  label?: string
  placeholder?: string
}

const TextSelectField: FC<Props> = ({ children, fieldId, label, placeholder, ...props }) => {
  const { value, setValue } = useField<string>(fieldId)

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <TextSelect
        {...props}
        id={fieldId}
        status={value === '' ? 'empty' : 'selected'}
        value={value}
        onChange={(ev) => setValue(ev.currentTarget.value)}
      >
        {placeholder &&
          <option disabled value=''>{placeholder}</option>
        }
        {children}
      </TextSelect>
    </FormElement>
  )
}

export default TextSelectField
