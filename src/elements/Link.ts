import { Link as ReactRouterLink } from 'react-router-dom'

import styled from '@/styles'

const Link = styled(ReactRouterLink, {
  color: '$B500',

  fontSize: '$md',
  textDecoration: 'none',

  '&:hover': {
    color: '$B500',

    textDecoration: 'underline'
  },

  variants: {
    appearance: {
      hidden: {
        color: '$textDefault'
      },
      subtle: {
        color: '$textSubtle'
      },
      hint: {
        color: '$textHint'
      }
    }
  }
})

Link.displayName = 'Link'

export default Link
