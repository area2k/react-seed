import FormProvider, { FormProps, FormValues } from '@area2k/use-form'

import FormErrorAlerts from '@/form/FormErrorAlerts'

const Form = <V extends FormValues>({ children, ...props }: FormProps<V>) => {
  return (
    <FormProvider {...props}>
      <FormErrorAlerts />
      {children}
    </FormProvider>
  )
}

export default Form
