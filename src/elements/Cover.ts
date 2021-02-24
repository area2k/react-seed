import styled from '@/styles'

const Cover = styled('div', {
  pointerEvents: 'none',
  userSelect: 'none',

  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
})

Cover.displayName = 'stitches(Cover)'

export default Cover
