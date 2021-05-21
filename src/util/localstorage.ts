export const ACCESS_TOKEN_KEY = '$accessToken'
export const DEVICE_TOKEN_KEY = '$deviceToken'

export const DEBUG_FLAG_KEY = 'debug'

export default {
  clear: () => localStorage.clear(),
  clearAuth: () => (
    [ACCESS_TOKEN_KEY, DEVICE_TOKEN_KEY].forEach((key) => localStorage.removeItem(key))
  ),
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
  multiGet: (...keys: string[]) => {
    const values: (string | null)[] = []

    keys.forEach((key) => {
      values.push(localStorage.getItem(key))
    })

    return values
  },
  multiRemove: (keys: string[]) => keys.forEach((key) => localStorage.removeItem(key)),
  multiSet: (map: Record<string, string>) => {
    Object.keys(map).forEach((key) => {
      localStorage.setItem(key, map[key])
    })
  }
}
