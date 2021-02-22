import styled from '@/styles'

import Button from '@/elements/Button'

const IconicButton = styled(Button, {
  $$boxSize: '36px',
  $$fontSize: '$fontSizes$xl',

  height: '$$boxSize',
  padding: 0,
  width: '$$boxSize',

  fontSize: '$$fontSize',
  lineHeight: '$$boxSize',

  variants: {
    size: {
      xs: {
        $$boxSize: '24px',
        $$fontSize: '$fontSizes$md'
      },
      sm: {
        $$boxSize: '28px',
        $$fontSize: '$fontSizes$lg'
      },
      md: {},
      lg: {
        $$boxSize: '42px',
        $$fontSize: '$fontSizes$xxl'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

export default IconicButton
