import { useField } from '@area2k/use-form'
import { ChangeEvent, ComponentProps, useCallback } from 'react'

import FormElement from '@/components/FormElement'
import Option from '@/components/Option'

import Text from '@/elements/Text'

import { removeAtIndex } from '@/util/array'

type OptionProps = Omit<ComponentProps<typeof Option>, 'checked' | 'id' | 'name' | 'value' | 'onChange'>
type OptionGroupOption = { disabled?: boolean, label: string, value: string }

type Props = OptionProps & {
  fieldId: string
  label?: string
  multiSelect?: boolean
  options: OptionGroupOption[]
}

const MultiOptionGroupField = ({ appearance = 'checkbox', disabled, fieldId, label, multiSelect, options, ...props }: Props) => {
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
        <div style={{ margin: '0 6px 12px' }}>
          <Text color={disabled ? 'lightest' : 'default'}>
            {label}
          </Text>
        </div>
      }
      <div style={{ marginLeft: '32px' }}>
        {options.map((option, index) => (
          <div key={`${fieldId}${index}`} style={{ marginBottom: '12px' }}>
            <Option
              {...props}
              appearance={appearance}
              checked={value.includes(option.value)}
              disabled={disabled || option.disabled}
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

export default MultiOptionGroupField
