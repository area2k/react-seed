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
      }
    },
    size: {
      sm: {
        fontSize: '$sm'
      },
      lg: {
        fontSize: '$lg'
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '24px'
      },
      xxl: {
        fontSize: '$xxl',
        lineHeight: '28px'
      }
    },
    weight: {
      semibold: {
        fontWeight: 600
      },
      bold: {
        fontWeight: 600
      }
    }
  }
})

export default Text
