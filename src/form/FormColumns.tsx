import styled from '@/styles'

const FormColumns = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  when: {
    mediaSmallDesktop: {
      columnGap: '1.25rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  },

  variants: {
    layout: {
      single: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr'
          }
        }
      },
      double: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr 1fr'
          }
        }
      },
      'double-left': {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '2fr 1fr'
          }
        }
      },
      'double-right': {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr 2fr'
          }
        }
      },
      triple: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr 1fr 1fr'
          }
        }
      }
    }
  }
})

FormColumns.displayName = 'FormColumns'

export default FormColumns
