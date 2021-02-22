import { Link as ReactRouterLink } from 'react-router-dom'

import styled from '@/styles'

const Link = styled(ReactRouterLink, {
  color: '$themeDark',

  fontSize: '$md',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$themeA4',
    color: '$themeDark',

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
