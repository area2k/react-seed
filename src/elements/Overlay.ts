import styled from '@/styles'

const Overlay = styled('div', {
  $$bgColor: '$colors$neutralA32',

  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,

  backgroundColor: '$$bgColor',
  overflowX: 'hidden',
  overflowY: 'auto',

  zIndex: '$overlay'
})

Overlay.displayName = 'stitches(Overlay)'

export default Overlay
