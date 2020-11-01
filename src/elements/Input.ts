import styled from '@/styles'

const Input = styled('input', {
  padding: '0.25rem 0.625rem',
  width: '100%',

  backgroundColor: 'transparent',
  border: '1px solid $basicDefaultBorder',
  borderRadius: '3px',
  color: '$textDefault',
  outline: 'none',

  fontSize: '0.875rem',
  lineHeight: '28px',

  transition: 'box-shadow 200ms ease-in-out',

  '&:focus': {
    borderColor: '$primaryActiveBorder',
    boxShadow: '0 0 0px 3px $primaryFocusBorder'
  },

  '&::-webkit-input-placeholder': {
    color: '$textHint'
  },

  '&[disabled]': {
    backgroundColor: '$basicTransparentDisabled',
    borderColor: '$basicTransparentDisabledBorder',
    color: '$textDisabled',
    cursor: 'not-allowed',

    '&::-webkit-input-placeholder': {
      color: '$textHintDisabled'
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
