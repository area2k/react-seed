import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from '@/styles'

export const Icon = styled(FontAwesomeIcon, {
  color: 'inherit',

  fontSize: 'inherit',
  lineHeight: 'inherit',

  variants: {
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
        fontSize: '$xl',
      },
      xxl: {
        fontSize: '$xxl',
      },
      xxxl: {
        fontSize: '$xxxl',
      }
    }
  }
})

Icon.displayName = 'stitches(Icon)'

export default Icon
