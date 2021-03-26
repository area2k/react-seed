import { StitchesVariants } from '@stitches/react'
import { PropsWithChildren } from 'react'

import styled from '@/styles'

const Wrapper = styled('div', {
  display: 'grid',
  gap: '24px',
  gridTemplateAreas: '"primary" "secondary"',
  gridTemplateRows: 'auto auto',

  '@smallDesktop': {
    gridTemplateAreas: '"primary secondary"',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr 320px'
  },

  variants: {
    flipped: {
      true: {
        gridTemplateAreas: '"secondary" "primary"',

        '@smallDesktop': {
          gridTemplateAreas: '"secondary primary"',
          gridTemplateColumns: '320px 1fr'
        }
      },
      false: {}
    }
  }
})

const Primary = styled('div', {
  gridArea: 'primary'
})

const Secondary = styled('div', {
  gridArea: 'secondary'
})

type Props = {
  flipped?: StitchesVariants<typeof Wrapper>['flipped']
}

const PrimarySecondaryLayout = ({ children, ...variants }: PropsWithChildren<Props>) => {
  return (
    <Wrapper {...variants}>
      {children}
    </Wrapper>
  )
}

PrimarySecondaryLayout.Wrapper = Wrapper
Wrapper.displayName = 'stitches(PrimarySecondaryLayout.Wrapper)'

PrimarySecondaryLayout.Primary = Primary
Wrapper.displayName = 'stitches(PrimarySecondaryLayout.Primary)'

PrimarySecondaryLayout.Secondary = Secondary
Wrapper.displayName = 'stitches(PrimarySecondaryLayout.Secondary)'

export default PrimarySecondaryLayout
