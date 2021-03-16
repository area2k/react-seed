import { Story, Meta } from '@storybook/react'

import BreadcrumbsComponent, { Props } from '@/components/Breadcrumbs'

export const Breadcrumbs: Story<Props> = (props) => <BreadcrumbsComponent {...props} />
Breadcrumbs.args = {
  crumbs: [{
    a11yLabel: 'Go to home page', label: 'Home', to: '/'
  }, {
    a11yLabel: 'Go to products page', label: 'Products', to: '/products'
  },{
    a11yLabel: 'Go to "my product" page', label: 'My product', to: '/products/my-product'
  }, {
    a11yLabel: 'Go to orders page', label: 'Orders', to: '/products/featured/orders'
  }]
}

export default {
  title: 'Components/Breadcrumbs',
  component: BreadcrumbsComponent,
  argTypes: {
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta
