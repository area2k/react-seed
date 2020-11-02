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
      }
    }
  }
})

Icon.displayName = 'Icon'

export default Icon
