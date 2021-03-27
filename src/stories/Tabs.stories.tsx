import { Story, Meta } from '@storybook/react'
import { useState } from 'react'

import Card from '@/components/Card'
import TabsComponent, { Props as TabsProps } from '@/components/Tabs'

type Props = Omit<TabsProps, 'selected' | 'onSelect'>

export const Tabs: Story<Props> = (props) => {
  const [tab, setTab] = useState(0)

  return (
    <Card title='Tabs'>
      <TabsComponent
        {...props}
        selected={tab}
        onSelect={setTab}
      />
      <Card.Section>
        Currently on Tab #{tab + 1}
      </Card.Section>
    </Card>
  )
}
Tabs.args = {
  tabs: [{
    a11yLabel: 'Go to the first tab',
    label: 'First tab'
  }, {
    a11yLabel: 'Go to the second tab',
    label: 'Second tab'
  }, {
    a11yLabel: 'Go to the third tab',
    label: 'Third tab'
  }]
}

export default {
  title: 'Components/Tabs',
  component: TabsComponent,
  argTypes: {
    fit: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
          {Story()}
        </div>
      </div>
    )
  ]
} as Meta
