import styled from '@/styles'

const TableCell = styled('td', {
  padding: '16px',

  color: '$textDefault',
  fontSize: '$md',
  lineHeight: 1.5,

  '&:first-child': {
    paddingLeft: '20px'
  },

  '&:last-child': {
    paddingRight: '20px'
  }
})

TableCell.displayName = 'Table-TableCell'

export default TableCell
