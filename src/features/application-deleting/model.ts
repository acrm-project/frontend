import { createEvent, createEffect, forward, sample } from 'effector'
import { deleteOne } from '../../api/application-deleting'
import { $clientId } from 'entities/client'
import { getApplications } from 'entities/application'

export const deleteApplication = createEvent<number>()

export const deleteApplicationFx = createEffect<number, void>()

forward({ from: deleteApplication, to: deleteApplicationFx })

deleteApplicationFx.use(async (id) => {
  await deleteOne(id)
})

// refetch client applications after deleting one
sample({
  clock: deleteApplicationFx.done,
  source: $clientId,
  target: getApplications,
})
