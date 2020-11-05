import { useField } from '@area2k/use-form'
import { ComponentProps } from 'react'

import Bullseye from '@/components/Bullseye'
import FormElement from '@/components/FormElement'

import Text from '@/elements/Text'

type BullseyeProps = Omit<ComponentProps<typeof Bullseye>, 'checked' | 'id' | 'name' | 'value' | 'onChange'>

type RadioOption = { label: string, value: string }

type Props = BullseyeProps & {
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
          <div key={`${fieldId}${index}`} style={{ marginBottom: '0.75rem' }}>
            <Bullseye
              {...props}
              checked={value === option.value}
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

export default RadioGroupField
