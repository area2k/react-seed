import styled from '@/styles'

const TableRow = styled('tr', {
  boxShadow: 'inset 0 -1px 0 0 $NA8',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$NA4'
  }
})

TableRow.displayName = 'Table-TableRow'

export default TableRow
