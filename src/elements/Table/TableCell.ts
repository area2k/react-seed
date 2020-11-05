import styled from '@/styles'

const TableCell = styled('td', {
  padding: '1rem',

  color: '$textDefault',
  fontSize: '$md',
  lineHeight: '24px',

  '&:first-child': {
    paddingLeft: '1.25rem'
  },

  '&:last-child': {
    paddingRight: '1.25rem'
  }
})

TableCell.displayName = 'Table-TableCell'

export default TableCell
