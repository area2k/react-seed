import styled from '@/styles'

const Text = styled('span', {
  color: '$textDefault',

  fontSize: '$md',
  fontWeight: 400,
  lineHeight: 1.71429,

  variants: {
    color: {
      hint: {
        color: '$textHint'
      },
      primary: {
        color: '$textPrimary'
      },
      light: {
        color: '$textLight'
      },
      dark: {
        color: '$textDark'
      },
      danger: {
        color: '$textDanger'
      }
    },
    size: {
      sm: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '28px'
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '28px'
      },
      xxl: {
        fontSize: '$xxl',
        lineHeight: '28px'
      },
      inherit: {
        fontSize: 'inherit',
        lineHeight: 'inherit'
      }
    },
    weight: {
      medium: {
        fontWeight: 500
      },
      semibold: {
        fontWeight: 600
      },
      bold: {
        fontWeight: 700
      },
      inherit: {
        fontWeight: 'inherit'
      }
    }
  }
})

export default Text
