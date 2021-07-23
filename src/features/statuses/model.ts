import { createEvent, createEffect, sample, forward, split } from 'effector'
import {
  setApplicationToProgress,
  setApplicationToClosed,
} from '../../api/statuses'
import { $clientId } from 'entities/client'
import { getApplicationsInProgressFx } from 'entities/application'
import { getApplications } from 'entities/application'
import { $location } from '../../lib/routing/history'

export const toProgress = createEvent<number>()
export const toClosed = createEvent<number>()
const splittedRefetch = createEvent<string>()

export const toProgressFx = createEffect<number, void>()
export const toClosedFx = createEffect<number, void>()

forward({ from: toProgress, to: toProgressFx })

toProgressFx.use(async (applicationId) => {
  await setApplicationToProgress(applicationId)
})

forward({ from: toClosed, to: toClosedFx })

toClosedFx.use(async (applicationId) => {
  await setApplicationToClosed(applicationId)
})

// refetch applications after effects are done
sample({
  clock: toProgressFx.done,
  source: $clientId,
  target: getApplications,
})

// splitting request depending on current location
split({
  source: sample({
    clock: toClosedFx.done,
    source: $location,
  }),
  match: {
    refetch_in_progress: (location) => location.startsWith('/in_progress'),
    refetch_from_client: (location) => location.startsWith('/clients'),
  },
  cases: {
    refetch_in_progress: getApplicationsInProgressFx,

    refetch_from_client: splittedRefetch,
  },
})

sample({
  clock: splittedRefetch,
  source: $clientId,
  fn: (id, url) => id,
  target: getApplications,
})
