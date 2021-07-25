import {
  createStore,
  createEvent,
  createEffect,
  forward,
  split,
} from 'effector'
import { pending } from 'patronum'
import {
  getApplicationForEditing,
  saveChangedApplication,
} from 'shared/api/application'
import { ApplicationType } from 'shared/api/application/types'
import { historyPush } from 'lib/routing/history'

// types

// events
export const fetchApplicationToEdit = createEvent<number>()
export const saveChanges = createEvent<any>()

// effects
export const fetchApplicationToEditFx = createEffect<number, void, Error>()

export const saveChangesFx = createEffect<ApplicationType, void, Error>()

// stores
export const $applicationToEdit = createStore<ApplicationType | null>(null)
export const $loading = pending({ effects: [fetchApplicationToEditFx] })

// relationships

forward({ from: fetchApplicationToEdit, to: fetchApplicationToEditFx })

fetchApplicationToEditFx.use(async (id) => {
  return getApplicationForEditing(id)
})

forward({ from: saveChanges, to: saveChangesFx })

saveChangesFx.use(async (editedApplication) => {
  await saveChangedApplication(editedApplication)
})

$applicationToEdit.on(
  fetchApplicationToEditFx.doneData,
  (_prev, application) => application
)

// realization details

// redirect after changes saved
split({
  source: saveChangesFx.done.map((data) => ({
    status: data.params.status,
    clientId: data.params.clientId,
  })),
  match: {
    to_progress: (params) => params.status === 'IN_PROGRESS',
    to_rest: (params) =>
      params.status === 'CLOSED' || params.status === 'CREATED',
  },
  cases: {
    to_progress: historyPush.prepend(() => '/in_progress'),
    to_rest: historyPush.prepend(
      (params: { status: string; clientId: number }) =>
        `/clients/${params.clientId}/applications`
    ),
  },
})

fetchApplicationToEditFx.done.watch(({ params }) => {
  historyPush(`/${params}/edit`)
})
