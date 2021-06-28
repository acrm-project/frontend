import { createStore, createEvent, createEffect, forward } from 'effector'
import { pending } from 'patronum'
import { IApplicationFromBackend } from '../../api/application-creation/types'
import { fetchAllInProgress } from '../../api/in-progress'
import { changeStatusFx } from '../../features/statuses'

export const fetchApplicationsInProgress = createEvent<void>()
export const resetApplicationsInProgress = createEvent<void>()

export const fetchApplicationsInProgressFx =
  createEffect<void, IApplicationFromBackend[]>()

export const $applicationsInProgress = createStore<IApplicationFromBackend[]>(
  []
)

$applicationsInProgress
  .on(
    fetchApplicationsInProgressFx.doneData,
    (_prev, applications) => applications
  )
  .reset(resetApplicationsInProgress)

export const $loading = pending({ effects: [fetchApplicationsInProgressFx] })

forward({
  from: fetchApplicationsInProgress,
  to: fetchApplicationsInProgressFx,
})

// Updating applications in progress list after closing
forward({
  from: changeStatusFx.done,
  to: fetchApplicationsInProgressFx,
})

fetchApplicationsInProgressFx.use(async () => {
  return fetchAllInProgress()
})