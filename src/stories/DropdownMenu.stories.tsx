import { faCog, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import DropdownMenuComponent, { Props } from '@/components/DropdownMenu'

const items: Props['items'] = [
  [{
    icon: faUser, text: 'Profile', onClick: action('profile')
  }, {
    icon: faCog, text: 'Settings', onClick: action('settings')
  }],
  [{
    icon: faSignOutAlt, text: 'Sign out', onClick: action('signOut')
  }]
]

export const DropdownMenu: Story<Props> = (props) => <DropdownMenuComponent {...props} />
DropdownMenu.args = { items, children: <Button text='Open dropdown' /> }

export default {
  title: 'Dropdown Menu',
  component: DropdownMenuComponent,
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
    items: {
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
