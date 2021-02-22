import styled from '@/styles'

const TableHeading = styled('th', {
  padding: '14px 12px 12px',

  color: '$textLighter',

  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'left',

  verticalAlign: 'bottom',

  '&:first-child': {
    paddingLeft: '20px'
  },

  '&:last-child': {
    paddingRight: '20px'
  }
})

export default TableHeading
