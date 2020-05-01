import mutate from '@/state'

const DEFAULT_TIMEOUT = 4000

// Actions

export const hide = () => mutate((state) => {
  state.snackbar.isVisible = false
})

export const show = (message, options = {}) => mutate((state) => {
  state.snackbar = {
    isVisible: true,
    message,
    options
  }

  window.setTimeout(hide, options.timeout || DEFAULT_TIMEOUT)
})

// Selectors

const baseSelector = state => state.snackbar

export const selectIfVisible = state => baseSelector(state).isVisible

export const selectMessage = state => baseSelector(state).message

export const selectOptions = state => baseSelector(state).options

// Option defaults

export const SUCCESS = {
  bgColor: 'success600',
  color: 'white',
  icon: 'check'
}

export const WARNING = {
  bgColor: 'warn500',
  color: 'grey700',
  icon: 'exclamation-triangle'
}

export const DANGER = {
  bgColor: 'danger600',
  color: 'white',
  icon: 'fire'
}
