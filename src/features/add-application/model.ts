import { createEvent, createEffect, sample } from 'effector'
import { addNewApplication } from '../../api/application-creation'
import { NewClientApplicationType } from '../../api/application-creation/types'
import { getClientApplications } from 'features/client'
import { $clientId } from 'entities/client'

// types

// events
export const addApplication = createEvent<NewClientApplicationType>()

// effects

export const addNewApplicationFx = createEffect<
  { clientId: number; application: NewClientApplicationType },
  any
>()

// relationships

addNewApplicationFx.use(async ({ clientId, application }) => {
  await addNewApplication(clientId, application)
})

sample({
  clock: addApplication,
  source: $clientId,
  fn: (id, application) => ({ clientId: id, application }),
  target: addNewApplicationFx,
})

// refetch applications after adding new
sample({
  clock: addNewApplicationFx.done,
  source: $clientId,
  target: getClientApplications,
})
