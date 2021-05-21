import qs from 'query-string'
import { useLocation } from 'react-router-dom'

const useLocationSearch = () => {
  const { search } = useLocation()
  return qs.parse(search)
}

export default useLocationSearch
