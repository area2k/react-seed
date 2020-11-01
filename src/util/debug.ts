import ls, { DEBUG_FLAG_KEY } from '@/util/localstorage'

const enable = () => ls.set(DEBUG_FLAG_KEY, 'enabled')
const disable = () => ls.remove(DEBUG_FLAG_KEY)
const isEnabled = () => !!ls.get(DEBUG_FLAG_KEY)

const ifEnabled = (cb: (...args: any[]) => void) => (...args: any[]) => (
  isEnabled() && cb(...args)
)

/* tslint:disable:no-console */

const assert = ifEnabled(console.assert)
const count = ifEnabled(console.count)
const debug = ifEnabled(console.debug)
const error = ifEnabled(console.error)
const group = ifEnabled(console.group)
const groupEnd = ifEnabled(console.groupEnd)
const log = ifEnabled(console.log)

export default {
  assert,
  count,
  debug,
  disable,
  enable,
  error,
  group,
  groupEnd,
  ifEnabled,
  isEnabled,
  log
}
