import { StitchesVariants } from '@stitches/react'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

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
    inline: {
      true: {
        width: 'auto'
      },
      false: {}
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
    inline: false,
    vertical: false,
    wrap: false
  }
})

export type Props = ComponentPropsWithoutRef<'div'> & StitchesVariants<typeof Wrapper> & PropsWithChildren<{
  gap?: string | number
  horizontalGap?: string | number
  verticalGap?: string | number
}>

const Stack = ({ horizontalGap = 8, gap, verticalGap = 8, style = {}, ...props }: Props) => {
  const alignDefault = props.vertical ? 'start' : 'center'
  const gapStyles = {
    columnGap: gap || (gap === 0 ? 0 : horizontalGap),
    rowGap: gap || (gap === 0 ? 0 : verticalGap)
  }

  return (
    <Wrapper
      align={alignDefault}
      {...props}
      style={{ ...style, ...gapStyles }}
    />
  )
}

Stack.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Stack.Wrapper)'

export default Stack
