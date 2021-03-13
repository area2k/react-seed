import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import { BaseAction } from '@/types'

import ActionComponent, { Props } from '@/components/Action'

type StoryProps = Props & Partial<BaseAction>

const Template: Story<StoryProps> = ({ action, label, dangerous, icon, id, ...props }) => {
  const combinedAction = { dangerous, icon, id, ...action }
  return <ActionComponent action={combinedAction} {...props} />
}

export const CallbackAction = Template.bind({})
CallbackAction.args = { action: { label: 'Clickable action', onAction: action('onAction') } }

export const LinkAction = Template.bind({})
LinkAction.args = { action: { label: 'Internal link action', to: '/' } }

export const ExternalLinkAction = Template.bind({})
ExternalLinkAction.args = { action: { label: 'External link action', href: 'https://google.com', external: true } }

export default {
  title: 'Action',
  component: ActionComponent,
  argTypes: {
    dangerous: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
