import styled from '@/styles'

const TableHeading = styled('th', {
  padding: '0.875rem 0.75rem 0.75rem',

  color: '$textHint',

  fontSize: '$sm',
  fontWeight: 500,
  textAlign: 'left',

  verticalAlign: 'bottom',

  '&:first-child': {
    paddingLeft: '1.25rem'
  },

  '&:last-child': {
    paddingRight: '1.25rem'
  }
})

export default TableHeading
