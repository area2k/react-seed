import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, FC } from 'react'

import styled from '@/styles'

const Wrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  width: '100%',

  variants: {
    align: {
      baseline: {
        alignItems: 'baseline'
      },
      center: {},
      end: {
        alignItems: 'flex-end'
      },
      start: {
        alignItems: 'flex-start'
      }
    },
    justify: {
      apart: {
        justifyContent: 'space-between'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      start: {
        justifyContent: 'flex-start'
      }
    },
    vertical: {
      true: {
        flexDirection: 'column'
      },
      false: {}
    },
    wrap: {
      true: {
        flexWrap: 'wrap'
      },
      false: {}
    }
  },

  defaultVariants: {
    align: 'center',
    justify: 'start',
    vertical: false,
    wrap: false
  }
})

Wrapper.displayName = 'stitches(Stack.Wrapper)'

type Props = ComponentPropsWithoutRef<'div'> & StitchesVariants<typeof Wrapper> & {
  gap?: string | number
  horizontalGap?: string | number
  verticalGap?: string | number
}

const Stack: FC<Props> = ({ horizontalGap = 8, gap, verticalGap = 8, style = {}, ...props }) => {
  const alignDefault = props.vertical ? 'start' : 'center'
  const gapStyles = {
    columnGap: gap || verticalGap,
    rowGap: gap || horizontalGap
  }

  return (
    <Wrapper
      align={alignDefault}
      {...props}
      style={{ ...style, ...gapStyles }}
    />
  )
}

export default Stack
