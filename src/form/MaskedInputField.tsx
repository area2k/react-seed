import { useField } from '@area2k/use-form'
import { ComponentProps, useCallback, useState } from 'react'

import FormElement from '@/components/FormElement'
import MaskedInput from '@/components/MaskedInput'

import Text from '@/elements/Text'

type MaskedInputProps = Omit<ComponentProps<typeof MaskedInput>, 'value' | 'onAccept'>

type Props = MaskedInputProps & {
  fieldId: string
  label?: string
}

const MaskedInputField = ({ fieldId, label, ...props }: Props) => {
  const { addError, errors, removeError, value, setValue } = useField<string>(fieldId)

  const [isDirty, setIsDirty] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const hasErrors = Object.keys(errors).length > 0

  const handleBlur = useCallback(() => {
    if (isDirty) {
      if (isComplete || (!props.required && value === '')) {
        removeError('notCompleted')
      } else {
        addError('notCompleted', { message: 'Field must be completed' })
      }
    }
  }, [isDirty, isComplete, value])

  return (
    <FormElement htmlFor={fieldId} label={label}>
      <MaskedInput
        {...props}
        id={fieldId}
        name={fieldId}
        status={hasErrors ? 'danger' : 'basic'}
        onAccept={(value, inputMask) => {
          setIsDirty(true)
          setIsComplete(inputMask.masked.isComplete)
          setValue(value)

          if (inputMask.masked.isComplete || (!props.required && value === '')) {
            removeError('notCompleted')
          }
        }}
        onBlur={handleBlur}
      />
      {hasErrors &&
        Object.keys(errors).map((errorKey) => (
          <div key={errorKey} style={{ margin: '0.5rem 0.375rem 0' }}>
            <Text color='danger' size='sm' weight='medium'>
              {errors[errorKey].message}
            </Text>
          </div>
        ))
      }
    </FormElement>
  )
}

export default MaskedInputField
