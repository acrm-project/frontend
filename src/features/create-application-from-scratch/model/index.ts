import { createEffect, createEvent, forward } from 'effector'
import { createApplicationFromScratch } from 'shared/api/application'
import {
  ApplicationFormType,
  ApplicationType,
} from 'shared/api/application/types'

export const createApplication = createEvent<ApplicationFormType>()

export const createApplicationFx = createEffect<
  ApplicationFormType,
  ApplicationType,
  Error
>()

forward({ from: createApplication, to: createApplicationFx })

createApplicationFx.use(async (applicationFormData) => {
  return await createApplicationFromScratch(applicationFormData)
})
