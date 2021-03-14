import { Story, Meta } from '@storybook/react'

import OptionComponent, { Props } from '@/components/Option'

export const Option: Story<Props> = (props) => <OptionComponent {...props} id='storybook-option' />
Option.args = { label: 'Select me' }

export default {
  title: 'Components/Option',
  component: OptionComponent,
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    appearance: {
      control: {
        type: 'select',
        options: ['checkbox', 'bullseye', 'switch']
      },
      defaultValue: 'checkbox'
    },
    disabled: {
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
