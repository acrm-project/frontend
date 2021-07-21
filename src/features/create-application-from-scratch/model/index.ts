import { createEffect, createEvent, forward } from 'effector'
import {
  ApplicationFormType,
  ApplicationType,
  createApplicationFromScratch,
} from 'shared/api/application'

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
