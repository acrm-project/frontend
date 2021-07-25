import { createStore, createEvent, createEffect, forward } from 'effector'
import {
  getAllApplications,
  getAplicationsInProgress,
} from 'shared/api/application'
import { ApplicationType } from 'shared/api/application/types'

export const getApplications = createEvent<number>()
export const getApplicationsInProgress = createEvent<void>()

export const getApplicationsFx = createEffect<
  number,
  ApplicationType[],
  Error
>()
export const getApplicationsInProgressFx = createEffect<
  void,
  ApplicationType[],
  Error
>()

export const $application = createStore<ApplicationType | null>(null)
export const $applications = createStore<ApplicationType[]>([])
export const $applicationsInProgress = createStore<ApplicationType[]>([])

forward({ from: getApplications, to: getApplicationsFx })

getApplicationsFx.use(async (clientId) => {
  return getAllApplications(clientId)
})

forward({ from: getApplicationsInProgress, to: getApplicationsInProgressFx })

getApplicationsInProgressFx.use(() => {
  return getAplicationsInProgress()
})
