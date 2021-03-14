import { Story, Meta } from '@storybook/react'

import ButtonComponent, { Props } from '@/components/Button'

export const Button: Story<Props> = (props) => <ButtonComponent {...props} />
Button.args = { a11yLabel: 'Click me' }

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    hasPopover: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
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
      },
      defaultValue: 'primary'
    },
    status: {
      control: {
        type: 'select',
        options: ['theme', 'neutral', 'success', 'danger', 'hi-contrast']
      },
      defaultValue: 'theme'
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
