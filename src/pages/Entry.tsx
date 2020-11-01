import { useQuery } from '@apollo/client'

import CurrentAccount from './CurrentAccount.gql'

const Entry = () => {
  useQuery(CurrentAccount)

  return <div>Hi world</div>
}

export default Entry
