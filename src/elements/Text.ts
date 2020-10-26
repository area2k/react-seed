import styled from '@/styles'

const Text = styled('span', {
  color: '$textDefault',

  fontSize: '0.875rem',
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
      s: {
        fontSize: '0.75rem'
      },
      l: {
        fontSize: '1rem'
      },
      xl: {
        fontSize: '1.25rem',
        lineHeight: '24px'
      },
      xxl: {
        fontSize: '1.5rem',
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
