import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import TagComponent, { Props as TagProps } from '@/components/Tag'

type Props = TagProps & {
  removeable: boolean
}

export const Tag: Story<Props> = ({ removeable, ...props }) => {
  return <TagComponent {...props} onRemove={removeable ? action('onRemove') : undefined} />
}
Tag.args = { label: 'Important customer' }

export default {
  title: 'Components/Tag',
  component: TagComponent,
  argTypes: {
    removeable: {
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
    label: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
