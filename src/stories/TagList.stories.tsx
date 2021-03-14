import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import TagListComponent, { Props as TagListProps } from '@/components/TagList'

type Props = TagListProps & {
  removeable: boolean
}

export const TagList: Story<Props> = ({ removeable, ...props }) => {
  return <TagListComponent {...props} onRemove={removeable ? action('onRemove') : undefined} />
}
TagList.args = { tags: ['Important customer', '> $10k lifetime spend', 'FB ad campaign',] }

export default {
  title: 'Components/Tag List',
  component: TagListComponent,
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
    gap: {
      control: {
        type: 'range',
        min: 8,
        max: 48,
        step: 8
      },
      defaultValue: 8
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
} as Meta
