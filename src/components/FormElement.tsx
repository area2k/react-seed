import { FC } from 'react'

import styled from '@/styles'

const Wrapper = styled('div', {
  marginBottom: '1.25rem'
})

const Label = styled('label', {
  display: 'block',
  margin: '0 6px 6px',

  color: '$textDefault',

  fontSize: '$sm',
  fontWeight: '$medium'
})

Wrapper.displayName = 'stitches(FormElement.Wrapper)'
Label.displayName = 'stitches(FormElement.Label)'

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
