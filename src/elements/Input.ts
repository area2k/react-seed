import styled from '@/styles'

const Input = styled('input', {
  $$bgColor: 'white',
  $$borderColor: '$colors$neutralLight',
  $$textColor: '$colors$textDefault',
  $$placeholderTextColor: '$colors$textLightest',

  $$hoverBgColor: 'white',
  $$hoverBorderColor: '$colors$themeDefault',

  $$focusBorderColor: '$colors$themeDefault',
  $$focusRingColor: '$colors$themeA24',

  $$disabledBgColor: '$colors$neutralLightest',
  $$disabledBorderColor: '$colors$neutralLight',
  $$disabledTextColor: '$colors$textLight',
  $$disabledPlaceholderTextColor: '$colors$textLightest',

  padding: '4px 12px',
  width: '100%',

  backgroundColor: '$$bgColor',
  border: '1px solid $$borderColor',
  borderRadius: '$lg',
  color: '$$textColor',
  outline: 'none',

  fontFamily: '$inter',
  fontSize: '$md',
  lineHeight: '28px',

  transition: 'box-shadow 200ms ease-in-out',

  '&:hover': {
    backgroundColor: '$$hoverBgColor',
    borderColor: '$$hoverBorderColor'
  },

  // '&:focus': {
  //   borderColor: '$$focusBorderColor',
  //   boxShadow: '0 0 0px 3px $$focusRingColor'
  // },

  '&::-webkit-input-placeholder': {
    color: '$$placeholderTextColor'
  },

  '&[disabled]': {
    backgroundColor: '$$disabledBgColor',
    borderColor: '$$disabledBorderColor',
    color: '$$disabledTextColor',
    cursor: 'not-allowed',

    '&::-webkit-input-placeholder': {
      color: '$$disabledPlaceholderTextColor'
    },
  },

  variants: {
    size: {
      l: {
        fontSize: '1rem',
        padding: '0.375rem 0.75rem'
      },
      xl: {
        fontSize: '1.25rem',
        lineHeight: '32px',
        padding: '0.375rem 1rem'
      }
    },
    status: {
      basic: {},
      danger: {
        backgroundColor: '$dangerTransparentDefault',
        borderColor: '$dangerDefaultBorder',
        '&:focus': {
          borderColor: '$dangerActiveBorder',
          boxShadow: '0 0 0px 3px $dangerFocusBorder'
        }
      },
      warning: {
        backgroundColor: '$warningTransparentDefault',
        borderColor: '$warningDefaultBorder',
        '&:focus': {
          borderColor: '$warningActiveBorder',
          boxShadow: '0 0 0px 3px $warningFocusBorder'
        }
      }
    }
  }
})

export default Input
