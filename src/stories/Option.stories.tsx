import { Story, Meta } from '@storybook/react'

import OptionComponent, { Props } from '@/components/Option'

export const Option: Story<Props> = (props) => <OptionComponent {...props} id='storybook-option' />
Option.args = { label: 'Select me' }

export default {
  title: 'Option',
  component: OptionComponent,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: ['checkbox', 'bullseye', 'switch']
      },
      defaultValue: 'checkbox'
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
