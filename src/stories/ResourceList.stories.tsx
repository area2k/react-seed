import { Story, Meta } from '@storybook/react'

import Card from '@/components/Card'
import ResourceListComponent, { Props } from '@/components/ResourceList'
import Stack from '@/components/Stack'
import { Body, Small } from '@/components/Typography'

type DemoItem = {
  id: number
  name: string
  email: string
}

const items: DemoItem[] = [{
  id: 1,
  name: 'Andrew Rempe',
  email: 'arempe@inbox.area2k.com'
}, {
  id: 2,
  name: 'Eric Ashman',
  email: 'eashman@inbox.area2k.com'
}]

const renderItem = ({ id, name, email }: DemoItem) => (
  <ResourceListComponent.Item
    key={id}
    persistActions
    actions={[{ label: 'View recent order', to: '/orders/1' }]}
    to={`/users/${id}`}
  >
    <Stack vertical gap={0}>
      <Body weight='medium'>
        {name}
      </Body>
      <Small>
        {email}
      </Small>
    </Stack>
  </ResourceListComponent.Item>
)

export const ResourceList: Story<Props<DemoItem>> = (props) => <ResourceListComponent {...props} />
ResourceList.args = { resourceName: { singular: 'user', plural: 'users' }, items, renderItem }

export default {
  title: 'Components/Resource List',
  component: ResourceListComponent,
  argTypes: {
    renderItem: {
      table: {
        disable: true
      }
    },
    isLoading: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
          <Card>
            {Story()}
          </Card>
        </div>
      </div>
    )
  ]
} as Meta
