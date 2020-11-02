import styled from '@/styles'

const Overlay = styled('div', {
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,

  backgroundColor: '$NA32',
  overflowX: 'hidden',
  overflowY: 'auto',

  zIndex: '$overlay'
})

Overlay.displayName = 'Overlay'

export default Overlay
