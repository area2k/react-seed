import { StitchesProps } from '@stitches/react'
import { FC } from 'react'

import styled from '@/styles'

import Input from '@/elements/Input'

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

Wrapper.displayName = 'TextSelect-Wrapper'

const Select = styled(Input, {
  $$textColor: '$colors$textDefault',
  $$placeholderTextColor: '$colors$textLightest',

  $$disabledTextColor: '$colors$textLighter',
  $$disabledPlaceholderTextColor: '$colors$textLightest',

  paddingRight: '2rem',

  appearance: 'none',
  cursor: 'pointer',

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

Select.displayName = 'TextSelect-Select'

type Props = StitchesProps<typeof Select>

const TextSelect: FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Select as='select' {...props}>
        {children}
      </Select>
    </Wrapper>
  )
}

export default TextSelect
