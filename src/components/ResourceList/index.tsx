import { ReactNode } from 'react'

import styled from '@/styles'

import Cover from '@/elements/Cover'

import EmptyState from '@/components/EmptyState'
import LoadingState from '@/components/LoadingState'

import Header, { Props as HeaderProps } from './Header'
import Item from './Item'

const ListWrapper = styled('div', {
  variants: {
    hasItems: {
      true: {
        minHeight: 'initial'
      },
      false: {
        minHeight: 128
      }
    }
  },

  defaultVariants: {
    hasItems: false
  }
})

const List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

const defaultEmptyState = <EmptyState title='No items' text='No items were found.' />
const defaultLoadingState = <LoadingState overlayColor='white' />

export type Props<T> = {
  emptyState?: ReactNode
  isLoading?: boolean
  items: T[]
  loadingState?: ReactNode
  resourceName?: HeaderProps['resourceName']
  renderItem: (item: T) => ReactNode
}

const ResourceList = <T extends any>({ emptyState = defaultEmptyState, isLoading, loadingState = defaultLoadingState, items, resourceName, renderItem }: Props<T>) => {
  const hasHeader = resourceName

  return (
    <>
      {hasHeader &&
        <Header
          items={items}
          resourceName={resourceName}
        />
      }
      <ListWrapper hasItems={items.length > 0}>
        {items.length > 0
          ? <List>
              <div>
                {items.map(renderItem)}
              </div>
            </List>
          : emptyState
        }
        {isLoading &&
          <Cover>
            {loadingState}
          </Cover>
        }
      </ListWrapper>
    </>
  )
}

ResourceList.List = List
List.displayName = 'stitches(ResourceList.List)'

ResourceList.Header = Header
ResourceList.Item = Item

export default ResourceList
