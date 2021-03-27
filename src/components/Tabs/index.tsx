import { StitchesVariants } from '@stitches/react'

import styled from '@/styles'

import Tab from './Tab'

import { TabDefinition } from './types'

const Wrapper = styled('div', {
  padding: '0 8px',

  borderBottom: '1px solid $colors$neutralLightest'
})

const TabList = styled('ul', {
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',

  variants: {
    fit: {
      true: {
        [`& > ${Tab.Wrapper}`]: {
          flex: 1
        }
      },
      false: {}
    }
  }
})

type Variants = StitchesVariants<typeof TabList>

export type Props = Variants & {
  selected: number
  tabs: TabDefinition[]
  onSelect: (tab: number) => void
}

const Tabs = ({ selected, tabs, onSelect, ...variants }: Props) => {
  return (
    <Wrapper>
      <TabList {...variants} role='tablist'>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            index={index}
            isActive={selected === index}
            tab={tab}
            onSelect={onSelect}
          />
        ))}
      </TabList>
    </Wrapper>
  )
}

Tabs.Wrapper = Wrapper
Wrapper.displayName = 'stitches(Tabs.Wrapper)'

Tabs.TabList = TabList
TabList.displayName = 'stithces(Tabs.TabList)'

Tabs.Tab = Tab

export default Tabs
