import styled from '@/styles'

import Table from '@/elements/Table'

const Card = styled('div', {
  width: '100%',

  backgroundColor: 'white',
  borderRadius: '$lg',
  boxShadow: '$1',

  [`> ${Table}`]: {
    paddingBottom: '64px'
  }
})

const Heading = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.25rem 1.25rem',

  borderRadius: '$lg $lg 0 0'
})

const Body = styled('div', {
  padding: '0 1.25rem 1.25rem',

  '&:first-child': {
    paddingTop: '1rem'
  }
})

Card.displayName = 'stitches(Card)'
Heading.displayName = 'stitches(Card.Heading)'
Body.displayName = 'stitches(Card.Body)'

export { Body, Heading }
export default Card

// #177BED
