export const ACCESS_TOKEN_KEY = '$accessToken'
export const DEVICE_TOKEN_KEY = '$deviceToken'

export default {
  clear: () => localStorage.clear(),
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
  multiSet: (map: Record<string, string>) => {
    Object.keys(map).forEach((key) => {
      localStorage.setItem(key, map[key])
    })
  }
}
