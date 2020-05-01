import qs from 'query-string'
import { useLocation } from 'react-router-dom'

const useQueryParams = () => qs.parse(useLocation().search)

export default useQueryParams
