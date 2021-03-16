import { faBarcode, faCheck, faPen, faReceipt, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

import PageComponent, { Props } from '@/components/Page'

export const Page: Story<Props> = (props) => <PageComponent {...props} />
Page.args = {
  breadcrumbs: [{
    a11yLabel: 'Go to home page', label: 'Home', to: '/'
  }, {
    a11yLabel: 'Go to products page', label: 'Products', to: '/products'
  },{
    a11yLabel: 'Go to "my product" page', label: 'My product', to: '/products/my-product'
  }, {
    a11yLabel: 'Go to orders page', label: 'Orders', to: '/products/featured/orders'
  }],
  primaryAction: { a11yLabel: 'Modify order', label: 'Modify', icon: faPen, onAction: action('modify') },
  secondaryActions: [{
    a11yLabel: 'More options',
    label: 'More',
    actions: [
      [{
        a11yLabel: 'Create tracking number for order', label: 'Add tracking', icon: faBarcode, onAction: action('tracking')
      },{
        a11yLabel: 'Mark order as fulfilled', label: 'Mark as fulfilled', icon: faCheck, onAction: action('fulfill')
      }],
      [{
        a11yLabel: 'Start a return for this order', label: 'Start return', icon: faUndo, onAction: action('return')
      }, {
        a11yLabel: 'Start a refund for this order', label: 'Start refund', icon: faReceipt, onAction: action('refund')
      }],
      [{
        a11yLabel: 'Delete this order', label: 'Delete order', dangerous: true, icon: faTrash, onAction: action('delete')
      }]
    ]
  }],
  title: 'Order #1234',
  subtitle: 'Placed on June 1st by Andrew Rempe'
}

export default {
  title: 'Components/Page',
  component: PageComponent,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', 'full']
      },
      defaultValue: 'lg'
    }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    layout: 'fullscreen'
  }
} as Meta
