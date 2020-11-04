import styled from '@/styles'
import { StitchesProps } from '@stitches/react'

const Track = styled('label', {
  display: 'inline-flex',

  position: 'relative',

  cursor: 'pointer',

  fontSize: '$md',

  '&::before': {
    content: '""',
    display: 'block',
    height: '18px',
    margin: '2px 12px 2px 2px',
    width: '48px',

    backgroundColor: '$NA4',
    border: '1px solid $NA48',
    borderRadius: '$round'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '10px',
    width: '10px',

    left: 7,
    position: 'absolute',
    top: 7,

    backgroundColor: '$NA48',
    borderRadius: '$round',

    transition: 'transform 300ms ease-in-out'
  },

  '&:hover': {
    '&::before': {
      borderColor: '$N600'
    },

    '&::after': {
      backgroundColor: '$N600'
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
      backgroundColor: '$B500',
      borderColor: '$B500'
    },

    '&::after': {
      backgroundColor: 'white',

      transform: 'translateX(30px)'
    },

    '&:hover': {
      '&::before': {
        borderColor: '$B400',
        backgroundColor: '$B400'
      },

      '&::after': {
        backgroundColor: 'white'
      }
    }
  }
})

Track.displayName = 'Switch-Track'

const Wrapper = styled('div', {
  display: 'inline-block',
  height: 24,

  position: 'relative',
})

Wrapper.displayName = 'RadioButton-Wrapper'

const HiddenInput = styled('input', {
  height: 1,
  margin: 0,
  pointerEvents: 'none',
  width: 1,

  opacity: 0,

  left: 48,
  position: 'absolute',
  top: 24
})

HiddenInput.displayName = 'RadioButton-HiddenInput'

type Props = Omit<StitchesProps<typeof HiddenInput>, 'id' | 'value'> & {
  checked: boolean
  id: string
  label?: string
  value: string
}

const RadioButton = ({ checked, id, label, value, onChange, ...props }: Props) => {
  return (
    <Wrapper>
      <HiddenInput
        {...props}
        checked={checked}
        id={id}
        type='radio'
        value={value}
        onChange={onChange}
      />
      <Track htmlFor={id}>
        {label}
      </Track>
    </Wrapper>
  )
}

export default RadioButton
