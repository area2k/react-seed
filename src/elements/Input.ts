import styled from '@/styles'

const Input = styled('input', {
  padding: '0.375rem 0.625rem',
  width: '100%',

  backgroundColor: '$NA4',
  border: '1px solid $N40',
  borderRadius: '$md',
  color: '$textDefault',
  outline: 'none',

  fontFamily: '$system',
  fontSize: '0.875rem',
  lineHeight: '28px',

  transition: 'box-shadow 200ms ease-in-out',

  '&:focus': {
    borderColor: '$primaryActiveBorder',
    boxShadow: '0 0 0px 3px $primaryFocusBorder'
  },

  '&::-webkit-input-placeholder': {
    color: '$NA48'
  },

  '&[disabled]': {
    backgroundColor: '$NA16',
    borderColor: '$N50',
    color: '$textDisabled',
    cursor: 'not-allowed',

    '&::-webkit-input-placeholder': {
      color: '$NA32'
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
