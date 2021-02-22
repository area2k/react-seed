import styled from '@/styles'

const Text = styled('span', {
  color: '$textDefault',

  fontSize: '$md',
  fontWeight: '$normal',
  lineHeight: 1.5,

  '> strong': {
    fontWeight: '$semi'
  },

  variants: {
    color: {
      default: {
        color: '$textDefault'
      },
      light: {
        color: '$textLight'
      },
      lighter: {
        color: '$textLighter'
      },
      lightest: {
        color: '$textLightest'
      },
      theme: {
        color: '$themeDarker'
      },
      success: {
        color: '$successDarker'
      },
      danger: {
        color: '$dangerDarker'
      },
      inherit: {
        color: 'inherit'
      }
    },
    size: {
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl'
      },
      xxl: {
        fontSize: '$xxl'
      },
      xxxl: {
        fontSize: '$xxxl'
      },
      inherit: {
        fontSize: 'inherit'
      }
    },
    weight: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semi'
      },
      bold: {
        fontWeight: '$bold'
      },
      inherit: {
        fontWeight: 'inherit'
      }
    }
  }
})

export default Text
