import { CallbackAction } from '@/types'

export type TabDefinition = Omit<CallbackAction, 'onAction'>
