import { StitchesVariants } from '@stitches/react'
import { FC } from 'react'

import styled from '@/styles'

import useClickout from '@/hooks/useClickout'

const Wrapper = styled('div', {
  display: 'none',

  position: 'absolute',

  backgroundColor: 'white',
  borderRadius: '$lg',
  boxShadow: '$3',

  zIndex: '$popover',

  variants: {
    align: {
      above: {
        bottom: 'calc(50% + 24px)'
      },
      below: {
        top: 'calc(50% + 24px)'
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
  }
})

Wrapper.compoundVariant({
  align: 'middle', justify: 'center'
}, {
  transform: 'translate(-50%, -50%) perspective(1px)'
})

Wrapper.displayName = 'Popover-Wrapper'

type Props = Omit<StitchesVariants<typeof Wrapper>, 'status'> & {
  id?: string
  isOpen: boolean
  onRequestClose: () => void
}

const Popover: FC<Props> = ({ align = 'top', children, id, isOpen, justify = 'left', onRequestClose }) => {
  const clickoutRef = useClickout<HTMLDivElement>(onRequestClose, {
    debugName: `Popover(${id || '<no id>'})`,
    isActive: isOpen
  })

  return (
    <Wrapper
      ref={clickoutRef}
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
