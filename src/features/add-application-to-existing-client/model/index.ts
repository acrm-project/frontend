import { createEvent, createEffect, sample } from 'effector'
import { addNewApplication } from 'shared/api/application'
import { ApplicationFormType } from 'shared/api/application/types'
import { $clientId } from 'entities/client'
import { getApplications } from 'entities/application'

// types

// events
export const addApplication = createEvent<Omit<ApplicationFormType, 'client'>>()

// effects

export const addNewApplicationFx = createEffect<
  { clientId: number; application: Omit<ApplicationFormType, 'client'> },
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
  target: getApplications,
})
