import { useField } from '@area2k/use-form'
import { ComponentProps, FC } from 'react'

import FormElement from '@/components/FormElement'
import TextSelect from '@/components/TextSelect'

type TextSelectProps = Omit<ComponentProps<typeof TextSelect>, 'id' | 'status' | 'value' | 'onChange'>
type TextSelectOption = { label: string, value: string }

type Props = TextSelectProps & {
  fieldId: string
  label?: string
  options: TextSelectOption[]
  placeholder?: string
}

const TextSelectField = ({ children, fieldId, label, options, placeholder, ...props }: Props) => {
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
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextSelect>
    </FormElement>
  )
}

export default TextSelectField
