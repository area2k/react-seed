import styled from '@/styles'

import { Shimmer } from './elements'

const Display = styled(Shimmer, {
  variants: {
    size: {
      sm: {
        maxWidth: 128
      },
      md: {
        maxWidth: 256
      },
      lg: {
        maxWidth: 512
      },
      full: {
        maxWidth: 'initial'
      }
    },
    type: {
      body: {
        height: '21px'
      },
      subheading: {
        height: '24px'
      },
      heading: {
        height: '30px'
      },
      title: {
        height: '36px'
      },
      display: {
        height: '48px'
      }
    }
  },

  defaultVariants: {
    full: false,
    type: 'subheading'
  }
})

Display.displayName = 'stitches(Skeleton.Display)'

export default Display
