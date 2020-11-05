import styled from '@/styles'
import { ComponentProps } from 'react'

const Box = styled('label', {
  display: 'inline-flex',

  position: 'relative',

  cursor: 'pointer',

  fontSize: '$md',

  '&::before': {
    content: '""',
    display: 'block',
    height: '18px',
    margin: '2px 12px 2px 2px',
    width: '18px',

    backgroundColor: '$NA4',
    border: '1px solid $NA48',
    borderRadius: '$md'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '9px',
    width: '4px',

    left: 9,
    position: 'absolute',
    top: 5,

    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px 0',

    transform: 'rotate(45deg)'
  },

  '&:hover': {
    '&::before': {
      backgroundColor: '$NA8',
      borderColor: '$N600'
    },

    '&::after': {
      borderColor: '$NA48'
    }
  },

  'input[disabled] + &': {
    '&::before': {
      backgroundColor: '$NA16',
      cursor: 'not-allowed'
    },

    '&:hover': {
      '&::before': {
        borderColor: '$NA48'
      },

      '&::after': {
        backgroundColor: '$NA48'
      }
    }
  },

  'input:checked + &': {
    '&::before': {
      borderColor: '$B500',
      backgroundColor: '$B400'
    },

    '&::after': {
      borderColor: 'white',
    },

    '&:hover': {
      '&::before': {
        borderColor: '$B400',
        backgroundColor: '$B300'
      },

      '&::after': {
        borderColor: 'white'
      }
    }
  }
})

Box.displayName = 'Checkbox-Box'

const Wrapper = styled('div', {
  display: 'inline-block',
  height: 24,

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

Wrapper.displayName = 'Checkbox-Wrapper'

type InputProps = ComponentProps<'input'>

type Props = InputProps & {
  id: string
  label?: string
}

const Checkbox = ({ id, label, ...props }: Props) => {
  return (
    <Wrapper>
      <input {...props} id={id} />
      <Box htmlFor={id}>
        {label}
      </Box>
    </Wrapper>
  )
}

export default Checkbox
