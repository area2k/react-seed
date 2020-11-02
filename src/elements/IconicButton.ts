import Icon from '@/elements/Icon'

import styled from '@/styles'

const IconicButton = styled('button', {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  height: '38px',
  width: '38px',

  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '$textHint',
  cursor: 'pointer',
  outline: 'none',

  fontSize: '$lg',

  '&:hover': {
    backgroundColor: '$NA8'
  },

  '&:focus': {
    boxShadow: '$focus',
  },

  '&:active': {
    backgroundColor: '$NA12'
  },

  variants: {
    size: {
      sm: {
        height: '28px',
        width: '28px',

        fontSize: '$lg'
      },
      md: {
        height: '38px',
        width: '38px',

        fontSize: '$lg'
      }
    }
  }
})

export default IconicButton
