import { StitchesVariants } from '@stitches/react'
import { ComponentProps, FC } from 'react'

import styled from '@/styles'

import useClickout from '@/hooks/useClickout'

const Wrapper = styled('div', {
  display: 'none',

  position: 'absolute',

  zIndex: '$popover',

  variants: {
    align: {
      above: {
        bottom: 'calc(100% + 4px)'
      },
      below: {
        top: 'calc(100% + 4px)'
      },
      bottom: {
        bottom: 'calc(50% - 24px)'
      },
      middle: {
        top: '50%',

        transform: 'translateY(-50%) perspective(1px);'
      },
      top: {
        top: 'calc(50% - 24px)'
      }
    },
    justify: {
      center: {
        left: '50%',

        transform: 'translateX(-50%) perspective(1px);'
      },
      left: {
        left: 0
      },
      right: {
        right: 0
      },
      'outside-left': {
        right: 'calc(100% + 8px)'
      },
      'outside-right': {
        left: 'calc(100% + 8px)'
      }
    },
    size: {
      auto: {},
      parent: {
        // NOTE: if we dont add 1px, for some reason the opener shows through
        minWidth: 'calc(100% + 1px)'
      },
      sm: {
        minWidth: '180px'
      },
      md: {
        minWidth: '220px'
      },
      lg: {
        minWidth: '300px'
      }
    },
    status: {
      closed: {
        display: 'none'
      },
      open: {
        display: 'block'
      }
    }
  },
  compoundVariants: [{
    align: 'middle',
    justify: 'center',
    css: {
      transform: 'translate(-50%, -50%) perspective(1px)'
    }
  }]
})

Wrapper.displayName = 'stitches(Popover.Wrapper)'

export type PopoverVariants = Omit<StitchesVariants<typeof Wrapper>, 'status'>

export type Props = ComponentProps<'div'> & PopoverVariants & {
  disableClickout?: boolean
  id?: string
  isOpen: boolean
  onRequestClose: () => void
}

const Popover: FC<Props> = ({ align = 'top', children, disableClickout = false, isOpen, id, justify = 'left', onRequestClose, ...rest }) => {
  const clickoutRef = useClickout<HTMLDivElement>(onRequestClose, {
    debugName: `Popover(${id || '<no id>'})`,
    isActive: !disableClickout && isOpen
  })

  return (
    <Wrapper
      ref={clickoutRef}
      {...rest}
      align={align}
      aria-hidden={!isOpen}
      id={id}
      justify={justify}
      status={isOpen ? 'open' : 'closed'}
    >
      {children}
    </Wrapper>
  )
}

export default Popover
