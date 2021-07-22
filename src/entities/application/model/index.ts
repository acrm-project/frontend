import { createStore } from 'effector'
import { ApplicationType } from 'shared/api/application'

export const $application = createStore<ApplicationType | null>(null)
export const $applications = createStore<ApplicationType[]>([])
