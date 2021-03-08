import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Story, Meta } from '@storybook/react'

import AlertComponent, { Props } from '@/components/Alert'

export const Alert: Story<Props> = (props) => <AlertComponent {...props} />
Alert.args = { title: 'Alert title', description: 'A description of the problem or message for the user.', icon: faInfoCircle }

export default {
  title: 'Alert',
  component: AlertComponent,
  argTypes: {
    icon: {
      control: false
    },
    status: {
      control: {
        type: 'select',
        options: ['theme', 'neutral', 'success', 'danger']
      },
      defaultValue: 'neutral'
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
