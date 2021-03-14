import { faCog, faDollarSign, faExternalLinkAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import Button from '@/components/Button'
import DropdownMenuComponent, { Props } from '@/components/DropdownMenu'

const actions: Props['actions'] = [
  [{
    icon: faUser, label: 'Profile', onAction: action('profile')
  }, {
    icon: faCog, label: 'Settings', onAction: action('settings')
  }, {
    icon: faDollarSign, label: 'Upgrade', onAction: () => undefined, disabled: true
  }],
  [{
    icon: faSignOutAlt, label: 'Sign out', onAction: action('signOut')
  }],
  [{
    icon: faExternalLinkAlt, label: 'View docs', href: 'https://google.com', external: true
  }]
]

export const DropdownMenu: Story<Props> = (props) => <DropdownMenuComponent {...props} />
DropdownMenu.args = { actions, children: <Button a11yLabel='Open dropdown' /> }

export default {
  title: 'Components/Dropdown Menu',
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
