import styled from '@/styles'

import TableRow from './TableRow'

const TableHead = styled('thead', {
  [`> ${TableRow}`]: {
    boxShadow: 'inset 0 -1px 0 0 $NA16',

    '&:hover': {
      backgroundColor: 'initial'
    }
  }
})

TableHead.displayName = 'Table-TableHead'

export default TableHead
