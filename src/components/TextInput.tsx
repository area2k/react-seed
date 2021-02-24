import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, useCallback, useRef } from 'react'

import styled from '@/styles'

import Cover from '@/elements/Cover'
import Input from '@/elements/Input'

const FocusCover = styled(Cover, {
  backgroundColor: 'white',
  border: '1px solid $colors$neutralLight',
  borderRadius: '$lg',

  focusPseudoElement: {
    element: 'after',
    activator: 'input:focus + &',
    borderWidth: 1
  }
})

const Wrapper = styled('div', {
  display: 'flex',

  [`> ${Input}`]: {
    background: 'none',
    borderColor: 'transparent',

    zIndex: 2
  }
})

type Props = ComponentPropsWithoutRef<'input'> & StitchesVariants<typeof Input> & {
  iconLeft?: IconDefinition
  iconRight?: IconDefinition
}

const TextInput = ({ ...props }: Props) => {
  const inputRef= useRef<HTMLInputElement>()

  const focusOnInput = useCallback(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [inputRef])

  return (
    <Wrapper onClick={focusOnInput}>
      <Input {...props} />
      <FocusCover />
    </Wrapper>
  )
}

export default TextInput
