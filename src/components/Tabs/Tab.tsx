import styled from '@/styles'
import { useCallback } from 'react'

import { TabDefinition } from './types'

const Wrapper = styled('li', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  color: '$textLighter',

  // '&::after': {
  //   content: '',
  //   display: 'none',
  //   height: 2,
  //   margin: '0 4px',

  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  //   right: 0,

  //   backgroundColor: '$neutralLighter',
  //   borderRadius: '$lg $lg 0 0'
  // },

  // '&:hover': {
  //   '&::after': {
  //     display: 'block'
  //   }
  // },

  // variants: {
  //   isActive: {
  //     true: {
  //       color: '$textDefault',

  //       '&::after': {
  //         display: 'block',

  //         backgroundColor: '$themeDefault'
  //       }
  //     },
  //     false: {

  //     }
  //   }
  // }
})

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  gap: 12,
  justifyContent: 'center',
  padding: 12,
  width: '100%',

  color: 'inherit',
  cursor: 'pointer',

  lineHeight: 1.5,

  focusPseudoElement: {
    element: 'after',
    borderWidth: 0,
    inset: '12px 12px'
  },

  '& > span': {
    padding: '4px 8px',
  },

  '&::before': {
    content: '',
    display: 'none',
    height: 2,
    margin: '0 4px',

    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,

    backgroundColor: '$neutralLighter',
    borderRadius: '$lg $lg 0 0'
  },

  '&:hover, &:focus-visible': {
    '&::before': {
      display: 'block'
    }
  },

  variants: {
    isActive: {
      true: {
        color: '$textDefault',

        '&::before': {
          display: 'block',

          backgroundColor: '$themeDefault'
        }
      },
      false: {}
    }
  }
})

export type Props = {
  index: number
  isActive: boolean
  tab: TabDefinition
  onSelect: (index: number) => void
}

const Tab = ({ index, isActive, tab, onSelect }: Props) => {
  const onClick = useCallback(() => onSelect(index), [index])

  return (
    <Wrapper
      role='presentation'
    >
      <Button
        isActive={isActive}
        onClick={onClick}
      >
        <span>{tab.label || tab.a11yLabel}</span>
      </Button>
    </Wrapper>
  )
}

Tab.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Tabs.Tab.Wrapper)'

Tab.TabList = Button
Button.displayName = 'stithces(Tabs.Tab.Button)'

export default Tab
