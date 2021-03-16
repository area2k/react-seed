import { NavLink } from 'react-router-dom'

import { LinkAction } from '@/types'

import Button from '@/components/Button'
import Stack from '@/components/Stack'

export type Props = {
  crumbs: LinkAction[]
}

const Breadcrumbs = ({ crumbs }: Props) => {
  return (
    <Stack gap={2}>
      {crumbs.map((crumb, index) => (
        <>
          <Button
            as={NavLink}
            a11yLabel={crumb.a11yLabel}
            appearance='plain'
            label={crumb.label}
            iconLeft={crumb.icon}
            end={crumb.end}
            to={crumb.to}
          />
          {index !== crumbs.length - 1 &&
            <div aria-hidden style={{ padding: '0 4px', userSelect: 'none' }}>/</div>
          }
        </>
      ))}
    </Stack>
  )
}

export default Breadcrumbs
