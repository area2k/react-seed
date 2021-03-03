import { faBug, faChartBar, faExclamationTriangle, faFilter, faNetworkWired, faPlay, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

import NavigationMenu from '@/components/NavigationMenu'

const Sidebar = () => {
  return (
    <NavigationMenu
      groups={[
        {
          items: [
            { icon: faTachometerAlt, text: 'Dashboard', type: 'link', to: '/', end: true }
          ]
        },
        {
          title: 'Pipeline',
          items: [
            { icon: faPlay, text: 'Build', type: 'link', to: '/build' },
            { icon: faNetworkWired, text: 'Distribute', type: 'link', to: '/distribute' },
            { icon: faBug, text: 'Test', type: 'link', to: '/test' }
          ]
        },
        {
          title: 'Monitoring',
          items: [
            { icon: faExclamationTriangle, text: 'Diagnostics', type: 'link', to: '/diagnostics' },
            { icon: faChartBar, text: 'Analytics', type: 'link', to: '/analytics' }
          ]
        },
        {
          title: 'Components',
          items: [
            { icon: faFilter, text: 'Filters', type: 'link', to: '/filters' }
          ]
        }
      ]}
    />
  )
}

export default Sidebar
