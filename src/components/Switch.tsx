import styled from '@/styles'
import { ComponentProps } from 'react'

const Track = styled('label', {
  $$bgColor: 'white',
  $$borderColor: '$colors$neutralLight',
  $$ballColor: '$colors$neutralLighter',
  $$textColor: '$colors$textLight',

  $$hoverBgColor: 'white',
  $$hoverBorderColor: '$colors$themeDefault',

  $$checkedBgColor: '$colors$themeDefault',
  $$checkedBorderColor: '$colors$themeDefault',
  $$checkedBallColor: 'white',

  $$checkedHoverBgColor: '$colors$themeDefault',
  $$checkedHoverBorderColor: '$colors$themeDefault',

  $$disabledBgColor: '$colors$neutralLighter',
  $$disabledBorderColor: '$colors$neutralLighter',
  $$disabledBallColor: '$colors$neutralLight',
  $$disabledTextColor: '$colors$textLightest',

  $$disabledCheckedBgColor: '$colors$neutralLight',
  $$disabledCheckedBorderColor: '$colors$neutralLight',
  $$disabledCheckedBallColor: 'white',

  $$focusRingColor: '$colors$themeA24',

  display: 'inline-flex',

  position: 'relative',

  color: '$$textColor',
  cursor: 'pointer',

  fontSize: '$md',

  '&::before': {
    content: '""',
    display: 'block',
    height: '21px',
    margin: '1px 12px 0 2px',
    width: '42px',

    backgroundColor: '$$bgColor',
    border: '1px solid $$borderColor',
    borderRadius: '$round',

    transition: 'background-color 200ms ease, border-color 300ms ease, box-shadow 300ms ease'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '12px',
    width: '12px',

    left: 6,
    position: 'absolute',
    top: 5,

    backgroundColor: '$$ballColor',
    borderRadius: '$round',

    transition: 'transform 300ms ease-in-out'
  },

  '&:hover': {
    '&::before': {
      borderColor: '$$hoverBorderColor',
      boxShadow: 'inset 0 0 0px 1px $$hoverBorderColor'
    }
  },

  'input:focus + &': {
    '&::before': {
      borderColor: '$$hoverBorderColor',
      boxShadow: 'inset 0 0 0px 1px $$hoverBorderColor, 0 0 0px 3px $$focusRingColor'
    }
  },

  'input[disabled] + &': {
    color: '$$disabledTextColor',
    cursor: 'not-allowed',

    '&::before': {
      backgroundColor: '$$disabledBgColor',
      borderColor: '$$disabledBorderColor'
    },

    '&::after': {
      backgroundColor: '$$disabledBallColor'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$disabledBgColor',
        borderColor: '$$disabledBorderColor',
        boxShadow: 'none'
      }
    }
  },

  'input[disabled]:checked + &': {
    '&::before': {
      backgroundColor: '$$disabledCheckedBgColor',
      borderColor: '$$disabledCheckedBorderColor',
    },

    '&::after': {
      borderColor: '$$disabledCheckedBallColor'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$disabledCheckedBgColor',
        borderColor: '$$disabledCheckedBorderColor'
      }
    }
  },

  'input:checked + &': {
    '&::before': {
      backgroundColor: '$$checkedBgColor',
      borderColor: '$$checkedBorderColor'
    },

    '&::after': {
      backgroundColor: '$$checkedBallColor',

      transform: 'translateX(22px)'
    },

    '&:hover': {
      '&::before': {
        backgroundColor: '$$checkedHoverBgColor',
        borderColor: '$$checkedHoverBorderColor'
      }
    }
  }
})

Track.displayName = 'Switch-Track'

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

Wrapper.displayName = 'Switch-Wrapper'

type InputProps = ComponentProps<'input'>

type Props = InputProps & {
  id: string
  label?: string
}

const Switch = ({ id, label, ...props }: Props) => {
  return (
    <Wrapper>
      <input {...props} id={id} />
      <Track htmlFor={id}>
        {label}
      </Track>
    </Wrapper>
  )
}

export default Switch
