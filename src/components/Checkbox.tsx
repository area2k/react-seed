import styled from '@/styles'
import { ComponentProps } from 'react'

const Box = styled('label', {
  $$bgColor: 'white',
  $$borderColor: '$colors$neutralLight',
  $$textColor: '$colors$textLight',

  $$hoverBgColor: 'white',
  $$hoverBorderColor: '$colors$themeDefault',

  $$checkedBgColor: '$colors$themeDefault',
  $$checkedBorderColor: '$colors$themeDefault',
  $$checkColor: 'white',

  $$checkedHoverBgColor: '$colors$themeDefault',
  $$checkedHoverBorderColor: '$colors$themeDefault',

  $$disabledBgColor: '$colors$neutralLighter',
  $$disabledBorderColor: '$colors$neutralLighter',
  $$disabledCheckColor: '$colors$neutralLighter',
  $$disabledTextColor: '$colors$textLightest',

  $$disabledCheckedBgColor: '$colors$neutralLight',
  $$disabledCheckedBorderColor: '$colors$neutralLight',
  $$disabledCheckedCheckColor: 'white',

  $$focusRingColor: '$colors$themeA24',

  display: 'inline-flex',

  position: 'relative',

  color: '$$textColor',
  cursor: 'pointer',

  fontSize: '$md',

  '&::before': {
    content: '""',
    display: 'block',
    height: '19px',
    margin: '2px 12px 1px 2px',
    width: '19px',

    backgroundColor: '$$bgColor',
    border: '1px solid $$borderColor',
    borderRadius: '$lg',

    transition: 'background-color 200ms ease, border-color 300ms ease, box-shadow 300ms ease'
  },

  '&::after': {
    content: '""',
    display: 'block',
    height: '10px',
    width: '5px',

    left: 9,
    position: 'absolute',
    top: 5,

    backgroundColor: 'transparent',
    borderColor: '$$checkColor',
    borderStyle: 'solid',
    borderWidth: '0 2px 2px 0',

    transform: 'rotate(43deg)'
  },

  '&:hover': {
    '&::before': {
      backgroundColor: '$$hoverBgColor',
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
      borderColor: '$$disabledBorderColor',
    },

    '&::after': {
      borderColor: '$$disabledCheckColor'
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
      borderColor: '$$disabledCheckedCheckColor'
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

    '&:hover': {
      '&::before': {
        backgroundColor: '$$checkedHoverBgColor',
        borderColor: '$$checkedHoverBorderColor'
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
