import { StitchesProps } from '@stitches/react'
import { FC } from 'react'

import styled from '@/styles'

import Input from '@/elements/Input'

const Wrapper = styled('div', {
  width: '100%',

  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    height: '6px',
    width: '6px',

    position: 'absolute',
    right: '1.25rem',
    top: 'calc(50% - 6px)',

    borderColor: '$N200',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px 0',

    transform: 'rotate(45deg)',

    zIndex: '10000'
  }
})

Wrapper.displayName = 'TextSelect-Wrapper'

const Select = styled(Input, {
  paddingRight: '2rem',

  appearance: 'none',
  cursor: 'pointer',

  '&[disabled]': {
    opacity: 1
  },

  variants: {
    status: {
      empty: {
        color: '$NA48',

        '&[disabled]': {
          color: '$NA32'
        }
      },
      selected: {
        color: '$textDefault',

        '&[disabled]': {
          color: '$textDisabled'
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
