import styled from '@/styles'

const FormColumns = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@smallDesktop': {
    columnGap: '1.25rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },

  variants: {
    layout: {
      single: {
        '@smallDesktop': {
          gridTemplateColumns: '1fr'
        }
      },
      double: {
        '@smallDesktop': {
          gridTemplateColumns: '1fr 1fr'
        }
      },
      'double-left': {
        '@smallDesktop': {
          gridTemplateColumns: '2fr 1fr'
        }
      },
      'double-right': {
        '@smallDesktop': {
          gridTemplateColumns: '1fr 2fr'
        }
      },
      triple: {
        '@smallDesktop': {
          gridTemplateColumns: '1fr 1fr 1fr'
        }
      }
    }
  }
})

FormColumns.displayName = 'stitches(FormColumns)'

export default FormColumns
