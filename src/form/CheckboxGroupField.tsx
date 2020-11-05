import { useField } from '@area2k/use-form'
import { ChangeEvent, ComponentProps, useCallback } from 'react'

import Checkbox from '@/components/Checkbox'
import FormElement from '@/components/FormElement'

import Text from '@/elements/Text'

import { removeAtIndex } from '@/util/array'

type CheckboxProps = Omit<ComponentProps<typeof Checkbox>, 'checked' | 'id' | 'name' | 'value' | 'onChange'>

type RadioOption = { label: string, value: string }

type Props = CheckboxProps & {
  fieldId: string
  label?: string
  options: RadioOption[]
}

const CheckboxGroupField = ({ fieldId, label, options, ...props }: Props) => {
  const { value, setValue } = useField<string[]>(fieldId)

  const handleChange = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    const changedOption = ev.currentTarget.value
    const changedIndex = value.indexOf(changedOption)

    const newValue = changedIndex === -1
      ? [...value, changedOption]
      : removeAtIndex(value, changedIndex)

    setValue(newValue)
  }, [value])

  return (
    <FormElement>
      {label &&
        <div style={{ marginBottom: '0.75rem' }}>
          <Text color='hint'>
            {label}
          </Text>
        </div>
      }
      <div style={{ marginLeft: '2rem' }}>
        {options.map((option, index) => (
          <div key={`${fieldId}${index}`} style={{ marginBottom: '0.75rem' }}>
            <Checkbox
              {...props}
              checked={value.includes(option.value)}
              id={`${fieldId}${index}`}
              label={option.label}
              type='checkbox'
              value={option.value}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </FormElement>
  )
}

export default CheckboxGroupField
