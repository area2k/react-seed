import { Story, Meta } from '@storybook/react'

import ButtonComponent, { Props } from '@/components/Button'

export const Button: Story<Props> = (props) => <ButtonComponent {...props} />
Button.args = { text: 'Click me' }

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
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
