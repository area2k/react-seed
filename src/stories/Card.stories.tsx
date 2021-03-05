import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { PropsWithChildren } from 'react'

import CardComponent, { Props } from '@/components/Card'
import { Body, Small } from '@/components/Typography'
import Stack from '@/components/Stack'

const Template: Story<PropsWithChildren<Props>> = (props) => <CardComponent {...props} />

export const Simple = Template.bind({})
Simple.args = { title: 'Online dashboard', sectioned: true,
                 children: <Body>View a summary of your app’s performance.</Body> }

export const FooterActions = Template.bind({})
FooterActions.args = { title: 'Setup 2-factor auth for your account', sectioned: true,
                       footerActions: [{
                         appearance: 'outline',
                         label: 'Maybe later',
                         onAction: action('Maybe later')
                       }, {
                         label: 'Enable now',
                         onAction: action('Enable now')
                       }], children: (
                        <Body>
                          Two-factor authentication adds an extra layer of security when logging in to your account. A special code will be required each time you log in, ensuring only you can access your account.
                        </Body>
                      ) }

export const HeaderActions = Template.bind({})
HeaderActions.args = { title: 'Product variants', sectioned: true,
                       actions: [{
                         label: 'Add variant',
                         onAction: action('Add variant')
                       }], children: (
                        <Body>
                          Add variants if this product comes in multiple versions, like different sizes or colors.
                        </Body>
                      ) }

export const SectionActions: Story<PropsWithChildren<Props>> = () => (
  <CardComponent
    actions={[{
      label: 'Edit',
      onAction: action('Edit')
    }, {
      label: 'Remove',
      status: 'danger',
      onAction: action('Remove')
    }]}
    title='Customer'
  >
    <CardComponent.Section>
      <Stack vertical gap={2}>
        <Body>
          Andrew Rempe
        </Body>
        <Small>
          arempe@area2k.com
        </Small>
      </Stack>
    </CardComponent.Section>
    <CardComponent.Section
      actions={[{ label: 'Change', onAction: action('Change address') }]}
      title='Primary address'
    >
      <Stack vertical gap={2}>
        <Body>
          1234 Main Street
        </Body>
        <Body color='light'>
          APT 413
        </Body>
        <Small>
          Dallas, TX 75531
        </Small>
      </Stack>
    </CardComponent.Section>
  </CardComponent>
)

export default {
  title: 'Card',
  component: CardComponent,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
        <div style={{ flex: '0 1 100%', maxWidth: '768px' }}>
          {Story()}
        </div>
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta
