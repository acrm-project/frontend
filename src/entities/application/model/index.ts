import { createStore, createEvent, createEffect, forward } from 'effector'
import { ApplicationType } from 'shared/api/application'

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
  //api
  return []
})
