import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import FormElement from '@/components/FormElement'
import Option from '@/components/Option'

import Text from '@/elements/Text'

type OptionProps = Omit<ComponentProps<typeof Option>, 'checked' | 'id' | 'name' | 'value' | 'onChange'>
type OptionGroupOption = { disabled?: boolean, label: string, value: string }

type Props = OptionProps & {
  fieldId: string
  label?: string
  options: OptionGroupOption[]
}

const SingleOptionGroupField = ({ appearance = 'bullseye', disabled, fieldId, label, options, ...props }: Props) => {
  const { value, setValue } = useField<string>(fieldId)

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
              checked={value === option.value}
              disabled={disabled || option.disabled}
              id={`${fieldId}${index}`}
              label={option.label}
              name={fieldId}
              type='radio'
              value={option.value}
              onChange={(ev) => setValue(ev.currentTarget.value)}
            />
          </div>
        ))}
      </div>
    </FormElement>
  )
}

export default SingleOptionGroupField
