import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import FormElement from '@/components/FormElement'
import RadioButton from '@/components/RadioButton'

import Text from '@/elements/Text'

type SwitchProps = Omit<ComponentProps<typeof RadioButton>, 'checked' | 'id' | 'name' | 'value' | 'onChange'>

type RadioOption = { label: string, value: string }

type Props = SwitchProps & {
  fieldId: string
  label?: string
  options: RadioOption[]
}

const RadioGroupField = ({ fieldId, label, options, ...props }: Props) => {
  const { value, setValue } = useField<string>(fieldId)

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
          <div style={{ marginBottom: '0.75rem' }}>
            <RadioButton
              {...props}
              checked={value === option.value}
              id={`${fieldId}${index}`}
              label={option.label}
              name={fieldId}
              value={option.value}
              onChange={(ev) => setValue(ev.currentTarget.value)}
            />
          </div>
        ))}
      </div>
    </FormElement>
  )
}

export default RadioGroupField
