import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import DropdownComponent, { Props } from '@/components/Dropdown'

export const Dropdown: Story<Props> = (props) => <DropdownComponent {...props} />
Dropdown.args = { Content: () => <div style={{ padding: '24px' }}>Dropdown content</div>, children: <Button text='Open dropdown' /> }

export default {
  title: 'Dropdown',
  component: DropdownComponent,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['above', 'below', 'bottom', 'middle', 'top']
      },
      defaultValue: 'below'
    },
    justify: {
      control: {
        type: 'select',
        options: ['center', 'left', 'right', 'outside-left', 'outside-right']
      },
      defaultValue: 'left'
    },
    size: {
      control: {
        type: 'select',
        options: ['auto', 'parent', 'sm', 'md', 'lg']
      },
      defaultValue: 'parent'
    },
    forceOpen: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    children: {
      table: {
        disable: true
      }
    },
    Content: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        {Story()}
      </div>
    )
  ]
} as Meta
