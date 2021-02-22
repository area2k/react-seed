import { StitchesVariants } from '@stitches/react'
import { ComponentProps } from 'react'

import styled from '@/styles'

import OptionElement from '@/elements/Option'

const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',

  position: 'relative',

  '> input': {
    height: 1,
    margin: 0,
    pointerEvents: 'none',
    width: 1,

    opacity: 0,

    left: 48,
    position: 'absolute',
    top: 24
  }
})

type OptionVariants = StitchesVariants<typeof OptionElement>

type Props = ComponentProps<'input'> & OptionVariants & {
  id: string
  label: string
  type?: 'checkbox' | 'radio'
}

const Option = ({ appearance, id, label, noMargin, type = 'checkbox', ...props }: Props) => {
  return (
    <Wrapper>
      <input {...props} id={id} type={type} />
      <OptionElement
        appearance={appearance}
        htmlFor={id}
        noMargin={noMargin}
      >
        {label}
      </OptionElement>
    </Wrapper>
  )
}

export default Option
