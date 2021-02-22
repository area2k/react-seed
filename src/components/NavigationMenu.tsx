import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from 'react-router-dom'

import styled from '@/styles'
import Text from '@/elements/Text'
import Icon from '@/elements/Icon'

const Wrapper = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  padding: '16px'
})

const Group = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '24px',

  '&:first-child': {
    marginTop: 0
  }
})

const Item = styled(NavLink, {
  alignItems: 'center',
  display: 'flex',
  gap: '20px',
  padding: '10px 20px',

  backgroundColor: 'transparent',
  borderRadius: '$lg',
  color: '$textLight',

  fontWeight: '$normal',
  textDecoration: 'none',

  '& + &': {
    marginTop: '2px'
  },

  '&:hover': {
    backgroundColor: '$neutralA4'
  },

  '&.active': {
    backgroundColor: '$themeA12',
    color: '$themeDarkest',

    fontWeight: '$medium',

    '&:hover': {
      backgroundColor: '$themeA16'
    }
  },

  variants: {
    status: {
      active: {
        backgroundColor: '$themeA12',
        color: '$themeDarkest',

        fontWeight: '$medium',

        '&:hover': {
          backgroundColor: '$themeA16'
        }
      }
    }
  }
})

type ActionNavigationItem = { type: 'action', icon?: IconDefinition, text: string, onClick: () => void }
type LinkNavigationItem = { type: 'link', icon?: IconDefinition, text: string, to: string, end?: boolean }
type NavigationItem = ActionNavigationItem | LinkNavigationItem

type NavigationGroup = { items: NavigationItem[], title?: string }

type Props = {
  groups: NavigationGroup[]
}

const NavigationMenu = ({ groups }: Props) => {
  return (
    <Wrapper>
      {groups.map((group, groupIndex) => (
        <Group key={`group-${groupIndex}`}>
          {group.title &&
            <div style={{ margin: '0 10px 10px' }}>
              <Text size='sm' weight='semibold'>
                {group.title}
              </Text>
            </div>
          }
          {group.items.map((item, itemIndex) => {
            switch (item.type) {
              case 'action':
                return null
              case 'link':
                return (
                  <Item
                    end={item.end}
                    key={`item-${groupIndex}-${itemIndex}`}
                    to={item.to}
                  >
                    {item.icon &&
                      <Text color='inherit' size='lg'>
                        <Icon fixedWidth icon={item.icon} />
                      </Text>
                    }
                    <Text color='inherit' size='md' weight='inherit'>
                      {item.text}
                    </Text>
                  </Item>
                )
            }
          })}
        </Group>
      ))}
    </Wrapper>
  )
}

export default NavigationMenu
