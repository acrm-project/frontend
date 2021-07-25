import { createEvent, createEffect, sample, forward, split } from 'effector'
import { changeApplicationStatus } from 'shared/api/application'
import { $clientId } from 'entities/client'
import { getApplicationsInProgressFx } from 'entities/application'
import { getApplications } from 'entities/application'
import { $location } from '../../lib/routing/history'
import { Status } from 'shared/types/status.enum'

export const toProgress = createEvent<number>()
export const toClosed = createEvent<number>()
const splittedRefetch = createEvent<string>()

export const toProgressFx = createEffect<
  { applicationId: number; status: Status },
  void
>()
export const toClosedFx = createEffect<
  { applicationId: number; status: Status },
  void
>()

sample({
  clock: toProgress,
  fn: (applicationId) => ({ applicationId, status: Status.IN_PROGRESS }),
  target: toProgressFx,
})

toProgressFx.use(async ({ applicationId, status }) => {
  await changeApplicationStatus(applicationId, status)
})

sample({
  clock: toClosed,
  fn: (applicationId) => ({ applicationId, status: Status.IN_PROGRESS }),
  target: toClosedFx,
})

toClosedFx.use(async ({ applicationId, status }) => {
  await changeApplicationStatus(applicationId, status)
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
