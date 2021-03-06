import styled from '@/styles'

const SingleColumn = styled('div', {
  display: 'grid',
  gridTemplateAreas: '"lgutter content rgutter"',
  // https://css-tricks.com/preventing-a-grid-blowout
  gridTemplateColumns: '16px minmax(0px, 1fr) 16px',
  maxWidth: '100%',

  when: {
    mediaSmallDesktop: {
      gridTemplateColumns: '1fr minmax(auto, 48rem) 1fr',
      padding: '0 32px'
    }
  },

  variants: {
    size: {
      xs: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr minmax(auto, 32rem) 1fr'
          }
        }
      },
      sm: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr minmax(auto, 40rem) 1fr'
          }
        }
      },
      md: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr minmax(auto, 48rem) 1fr'
          }
        }
      },
      lg: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr minmax(auto, 64rem) 1fr'
          }
        }
      },
      xl: {
        when: {
          mediaSmallDesktop: {
            gridTemplateColumns: '1fr minmax(auto, 72rem) 1fr'
          }
        }
      },
      full: {
        gridTemplateColumns: '0px 1fr 0px'
      }
    },
    noPadding: {
      true: {
        padding: 0
      },
      false: {}
    }
  }
})

SingleColumn.displayName = 'stitches(SingleColumn)'

export default SingleColumn
