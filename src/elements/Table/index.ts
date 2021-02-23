import styled from '@/styles'

import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeading from './TableHeading'
import TableRow from './TableRow'

const Table = styled('table', {
  borderCollapse: 'collapse',
  width: '100%'
})

Table.displayName = 'stitches(Table)'

export { TableCell, TableHead, TableHeading, TableRow }
export default Table
