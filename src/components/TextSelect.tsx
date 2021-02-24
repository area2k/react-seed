import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, FC } from 'react'

import styled from '@/styles'

import Input from '@/elements/Input'
import Cover from '@/elements/Cover'

const Wrapper = styled('div', {
  $$chevronColor: '$colors$neutralDefault',

  width: '100%',

  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    height: '8px',
    width: '8px',

    position: 'absolute',
    right: '24px',
    top: 'calc(50% - 6px)',

    borderColor: '$$chevronColor',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px 0',

    transform: 'rotate(45deg)',

    zIndex: '10000'
  }
})

const Select = styled(Input, {
  $$textColor: '$colors$textDefault',
  $$placeholderTextColor: '$colors$textLightest',

  $$disabledTextColor: '$colors$textLighter',
  $$disabledPlaceholderTextColor: '$colors$textLightest',

  paddingRight: '2rem',

  appearance: 'none',
  background: 'none',
  borderColor: 'transparent',
  cursor: 'pointer',

  zIndex: 2,

  '&[disabled]': {
    opacity: 1
  },

  variants: {
    status: {
      empty: {
        color: '$$placeholderTextColor',

        '&[disabled]': {
          color: '$$disabledPlaceholderTextColor'
        }
      },
      selected: {
        color: '$$textColor',

        '&[disabled]': {
          color: '$$disabledTextColor'
        }
      }
    }
  }
})

const FocusCover = styled(Cover, {
  backgroundColor: 'white',
  border: '1px solid $colors$neutralLight',
  borderRadius: '$lg',

  focusPseudoElement: {
    element: 'after',
    activator: 'select:focus + &',
    borderWidth: 1
  }
})

type Props = ComponentPropsWithoutRef<'select'> & StitchesVariants<typeof Input>

const TextSelect: FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Select as='select' {...props}>
        {children}
      </Select>
      <FocusCover />
    </Wrapper>
  )
}

Wrapper.displayName = 'stitches(TextSelect.Wrapper)'
Select.displayName = 'stitches(TextSelect.Select)'
FocusCover.displayName = 'stitches(TextSelect.FocusCover)'

export default TextSelect
