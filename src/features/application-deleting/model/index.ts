import { createEvent, createEffect, forward, sample } from 'effector'
import { deleteApplication } from 'shared/api/application'
import { $clientId } from 'entities/client'
import { getApplications } from 'entities/application'

export const applicationDeleted = createEvent<number>()

export const deleteApplicationFx = createEffect<number, void>()

forward({ from: applicationDeleted, to: deleteApplicationFx })

deleteApplicationFx.use(async (id) => {
  await deleteApplication(id)
})

// refetch client applications after deleting one
sample({
  clock: deleteApplicationFx.done,
  source: $clientId,
  target: getApplications,
})
