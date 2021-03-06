import { useErrors } from '@area2k/use-form'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ComponentProps } from 'react'

import Alert from '@/components/Alert'
import FormElement from '@/components/FormElement'

const DEFAULT_ICON = faExclamationTriangle

type FormError = {
  message: string
  icon?: IconDefinition
  status?: ComponentProps<typeof Alert>['status']
  title: string
}

const FormErrorAlerts = () => {
  const formErrors = useErrors()
  const keys = Object.keys(formErrors)

  if (keys.length === 0) return null

  return (
    <>
      {keys.map((key) => {
        const { icon, message, status, title } = formErrors[key] as FormError

        return (
          <FormElement key={key}>
            <Alert
              description={message}
              icon={icon || DEFAULT_ICON}
              status={status || 'warning'}
              title={title}
            />
          </FormElement>
        )
      })}
    </>
  )
}

export default FormErrorAlerts
