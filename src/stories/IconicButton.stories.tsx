import { Story, Meta } from '@storybook/react'

import IconicButtonComponent, { Props } from '@/components/IconicButton'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'

export const IconicButton: Story<Props> = (props) => <IconicButtonComponent {...props} />
IconicButton.args = { icon: faPenAlt }

export default {
  title: 'Iconic Button',
  component: IconicButtonComponent,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline', 'clear', 'plain']
      },
      defaultValue: 'outline'
    },
    status: {
      control: {
        type: 'select',
        options: ['theme', 'neutral', 'success', 'danger', 'hi-contrast']
      },
      defaultValue: 'theme'
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg']
      },
      defaultValue: 'md'
    },
    rounded: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    icon: {
      control: false
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
