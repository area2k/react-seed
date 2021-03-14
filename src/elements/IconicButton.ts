import styled from '@/styles'

import Button from '@/elements/Button'

const IconicButton = styled(Button, {
  $$boxSize: '36px',
  $$fontSize: '$fontSizes$lg',

  height: '$$boxSize',
  padding: 0,
  width: '$$boxSize',

  fontSize: '$$fontSize',
  lineHeight: '$$boxSize',

  variants: {
    size: {
      xs: {
        $$boxSize: '21px',
        $$fontSize: '$fontSizes$md'
      },
      sm: {
        $$boxSize: '28px',
        $$fontSize: '$fontSizes$lg'
      },
      md: {},
      lg: {
        $$boxSize: '36px',
        $$fontSize: '$fontSizes$xl'
      },
      xl: {
        $$boxSize: '42px',
        $$fontSize: '$fontSizes$xxl'
      }
    },
    rounded: {
      true: {
        borderRadius: '$round'
      },
      false: {}
    }
  },

  defaultVariants: {
    size: 'md',
    rounded: false
  }
})

export default IconicButton
