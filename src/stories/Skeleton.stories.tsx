import { Story, Meta } from '@storybook/react'

import Card from '@/components/Card'
import SkeletonComponent, { BodyProps, PageProps } from '@/components/Skeleton'
import Stack from '@/components/Stack'
import PrimarySecondaryLayout from '@/components/PrimarySecondaryLayout'

export const Body: Story<BodyProps> = (props) => <SkeletonComponent.Body {...props} />
Body.args = {}
Body.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md']
    },
    defaultValue: 'md'
  },
  lines: {
    control: {
      type: 'range',
      min: 1,
      max: 8,
      step: 1
    },
    defaultValue: 3
  }
}
Body.decorators = [
  (Story) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
      <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
        <Card sectioned title='Skeleton'>
          {Story()}
        </Card>
      </div>
    </div>
  )
]

export const Display: Story = (props) => <SkeletonComponent.Display {...props} />
Display.args = {}
Display.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['body', 'subheading', 'heading', 'title', 'display']
    },
    defaultValue: 'subheading'
  },
  size: {
    control: {
      type: 'select',
      options: ['sm', 'md', 'lg', 'full']
    },
    defaultValue: 'md'
  }
}
Display.decorators = [
  (Story) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
      <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
        <Card>
          <Card.Header>
            {Story()}
          </Card.Header>
          <Card.Section>
            <SkeletonComponent.Body />
          </Card.Section>
        </Card>
      </div>
    </div>
  )
]

export const Action: Story = (props) => <SkeletonComponent.Action {...props} />
Action.args = {}
Action.argTypes = {}
Action.decorators = [
  (Story) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
      <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
        <Card title='Actions'>
          <Card.Section>
            <SkeletonComponent.Body />
          </Card.Section>
          <Card.Footer justify='end'>
            {Story()}
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
]

export const Page: Story = (props) => <SkeletonComponent.Page {...props} />
Page.args = {
  children: (
    <PrimarySecondaryLayout>
      <PrimarySecondaryLayout.Primary>
        <Stack vertical gap={24}>
          <Card title='Variants'>
            <Card.Section>
              <SkeletonComponent.Body />
            </Card.Section>
            <Card.Footer justify='end'>
              <SkeletonComponent.Action />
            </Card.Footer>
          </Card>
          <Card title='Orders'>
            <Card.Section>
              <SkeletonComponent.Body lines={6} />
            </Card.Section>
          </Card>
        </Stack>
      </PrimarySecondaryLayout.Primary>
      <PrimarySecondaryLayout.Secondary>
        <Card>
          <Card.Header>
            <SkeletonComponent.Display size='sm' type='body' />
          </Card.Header>
          <Card.Section>
            <SkeletonComponent.Body />
          </Card.Section>
          <Card.Section>
            <SkeletonComponent.Body lines={2} />
          </Card.Section>
        </Card>
      </PrimarySecondaryLayout.Secondary>
    </PrimarySecondaryLayout>
  )
}
Page.argTypes = {
  primaryAction: {
    control: {
      type: 'boolean'
    },
    defaultValue: true
  },
  title: {
    control: {
      type: 'text'
    },
    defaultValue: 'Products'
  },
  secondaryActions: {
    control: {
      type: 'range',
      min: 0,
      max: 3,
      step: 1
    },
    defaultValue: 0
  },
  children: {
    table: {
      disable: true
    }
  }
}
Page.parameters = {
  layout: 'fullscreen'
}
// Page.decorators = [
//   (Story) => (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
//       <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
//         <Card title='Actions'>
//           <Card.Section>
//             <SkeletonComponent.Body />
//           </Card.Section>
//           <Card.Footer justify='end'>
//             {Story()}
//           </Card.Footer>
//         </Card>
//       </div>
//     </div>
//   )
// ]

export default {
  title: 'Components/Skeleton',
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta
