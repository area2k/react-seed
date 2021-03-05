import { Link as ReactRouterLink } from 'react-router-dom'

import styled from '@/styles'

const Link = styled(ReactRouterLink, {
  color: '$themeDark',
  outline: 'none',

  fontSize: '$md',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '$themeA4',
    color: '$themeDark',

    textDecoration: 'underline'
  },

  focusPseudoElement: {
    element: 'after',
    baseRadius: '$md',
    borderWidth: 0,
    ringColor: '$colors$themeLight'
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

Link.displayName = 'stitches(Link)'

export default Link
