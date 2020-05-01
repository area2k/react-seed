import createState from 'react-immer-state'

const { StateConsumer, StateProvider, mutate, withState } = createState({
  language: 'en',
  snackbar: {
    isVisible: false,
    message: '',
    options: {}
  }
})

export { StateConsumer, StateProvider, withState }

export default mutate
