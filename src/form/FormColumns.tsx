import styled from '@/styles'

const FormColumns = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  mediaSmallDesktop: {
    alignItems: 'end',
    columnGap: '1.25rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },

  variants: {
    layout: {
      single: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr'
        }
      },
      double: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 1fr'
        }
      },
      'double-left': {
        mediaSmallDesktop: {
          gridTemplateColumns: '2fr 1fr'
        }
      },
      'double-right': {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 2fr'
        }
      },
      triple: {
        mediaSmallDesktop: {
          gridTemplateColumns: '1fr 1fr 1fr'
        }
      }
    }
  }
})

FormColumns.displayName = 'FormColumns'

export default FormColumns
