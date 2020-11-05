import styled from '@/styles'
import { ComponentProps } from 'react'

const Target = styled('label', {
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
    borderRadius: '$round'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '8px',
    width: '8px',

    left: 8,
    position: 'absolute',
    top: 8,

    backgroundColor: 'transparent',
    borderRadius: '$round',
  },

  '&:hover': {
    '&::before': {
      borderColor: '$N600'
    },

    '&::after': {
      backgroundColor: '$NA32'
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
      backgroundColor: 'white',
    },

    '&:hover': {
      '&::before': {
        borderColor: '$B400',
        backgroundColor: '$B300'
      },

      '&::after': {
        backgroundColor: 'white'
      }
    }
  }
})

Target.displayName = 'Bullseye-Target'

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

Wrapper.displayName = 'Bullseye-Wrapper'

type InputProps = ComponentProps<'input'>

type Props = InputProps & {
  id: string
  label?: string
}

const Bullseye = ({ id, label, ...props }: Props) => {
  return (
    <Wrapper>
      <input {...props} id={id} />
      <Target htmlFor={id}>
        {label}
      </Target>
    </Wrapper>
  )
}

export default Bullseye
