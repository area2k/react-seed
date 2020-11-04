import FormProvider, { FieldErrorMap, FormProps, FormValues, SubmitHelpers } from '@area2k/use-form'
import { useCallback } from 'react'

import FormErrorAlerts from '@/form/FormErrorAlerts'

const Form = <V extends FormValues>({ children, onSubmitWithErrors, ...props }: FormProps<V>) => {
  const handleSubmitWithErrors = useCallback(async (values: V, errors: FieldErrorMap<V>, helpers: SubmitHelpers) => {
    if (onSubmitWithErrors) return onSubmitWithErrors(values, errors, helpers)

    helpers.setFormError('fieldErrors', {
      title: 'Form contains errors',
      message: 'Please fix the highlighted fields to continue.',
      status: 'danger'
    })
  }, [onSubmitWithErrors])

  return (
    <FormProvider
      {...props}
      onSubmitWithErrors={handleSubmitWithErrors}
    >
      <FormErrorAlerts />
      {children}
    </FormProvider>
  )
}

export default Form
