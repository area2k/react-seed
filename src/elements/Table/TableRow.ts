import styled from '@/styles'

const TableRow = styled('tr', {
  boxShadow: 'inset 0 -1px 0 0 $colors$neutralA8',

  variants: {
    clickable: {
      true: {
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: '$neutralA4'
        }
      },
      false: {}
    }
  },

  defaultVariants: {
    clickable: false
  }
})

TableRow.displayName = 'Table-TableRow'

export default TableRow
