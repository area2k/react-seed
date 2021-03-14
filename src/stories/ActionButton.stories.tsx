import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import { AnchorAction, BaseAction, CallbackAction, GenericAction, LinkAction } from '@/types'

import ActionComponent, { Props } from '@/components/Action'

type StoryProps = Props & Omit<Partial<BaseAction>, 'icon'> & {
  a11yLabel: string
  hasIcon: boolean
  icon: IconDefinition
}

const Template: Story<StoryProps> = ({ action, a11yLabel, hasIcon, icon, label, dangerous, id, ...props }) => {
  const combinedAction: GenericAction = { dangerous, id, label, ...action, a11yLabel }
  if (hasIcon) combinedAction.icon = icon

  return <ActionComponent.Button action={combinedAction} {...props} />
}

const callbackAction: CallbackAction = {
  a11yLabel: 'Click to test',
  onAction: action('onAction')
}

export const Callback = Template.bind({})
Callback.args = { a11yLabel: 'Click to test', action: callbackAction, label: 'Clickable action', icon: faCheck }

const linkAction: LinkAction = {
  a11yLabel: 'Go to users page',
  to: '/users'
}

export const Link = Template.bind({})
Link.args = { a11yLabel: 'Go to users page', action: linkAction, label: 'Link action', icon: faUser }

const anchorAction: AnchorAction = {
  a11yLabel: 'Open new tab to google.com',
  href: 'https://google.com',
  external: true
}

export const ExternalLink = Template.bind({})
ExternalLink.args = { a11yLabel: 'Open new tab to google.com', action: anchorAction, label: 'External link', icon: faGoogle }

export default {
  title: 'Components/Action/Button',
  component: ActionComponent,
  argTypes: {
    dangerous: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    hasIcon: {
      control: {
        type: 'boolean'
      },
      defaultValue: false,
      name: 'icon'
    },
    a11yLabel: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    appearance: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'clear', 'plain']
      }
    },
    status: {
      control: {
        type: 'select',
        options: ['theme', 'neutral', 'success', 'danger', 'hi-contrast']
      }
    },
    action: {
      control: false
    },
    icon: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
