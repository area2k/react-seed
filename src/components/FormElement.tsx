import { FC } from 'react'

import styled from '@/styles'

const Wrapper = styled('div', {
  marginBottom: '1.25rem'
})

const Label = styled('label', {
  display: 'block',
  margin: '0 0.375rem 0.375rem',

  color: '$N60',

  fontSize: '$sm',
  fontWeight: 500
})

Wrapper.displayName = 'FormElement-Wrapper'
Label.displayName = 'FormElement-Label'

type Props = {
  htmlFor?: string
  label?: string
}

const FormElement: FC<Props> = ({ children, htmlFor, label }) => {
  return (
    <Wrapper>
      {label &&
        <Label htmlFor={htmlFor}>
          {label}
        </Label>
      }
      {children}
    </Wrapper>
  )
}

export default FormElement
