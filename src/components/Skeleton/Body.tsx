import { StitchesVariants } from '@stitches/react'

import styled from '@/styles'

import Stack from '@/components/Stack'

import { Shimmer } from './elements'

const Line = styled(Shimmer, {
  borderRadius: '$round',

  variants: {
    size: {
      sm: {
        height: '8px',
        margin: '3px 0'
      },
      md: {
        height: '12px',
        margin: '4px 0'
      }
    },
    trailing: {
      true: {
        width: '70%'
      },
      false: {}
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

type Variants = Omit<StitchesVariants<typeof Line>, 'trailing'>

export type Props = Variants & {
  lines?: number
}

const Body = ({ lines = 3, ...variants }: Props) => {
  return (
    <Stack vertical gap={2}>
      {Array.from({ length: lines }, (_v, index) => (
        <Line
          key={index}
          trailing={index !== 0 && index === lines - 1}
          {...variants}
        />
      ))}
    </Stack>
  )
}

Body.Line = Line
Line.displayName = 'stitches(Skeleton.Body.Line)'

export default Body
