import { createEffect, createEvent, forward } from 'effector'
import { ApplicationFormType, ApplicationType } from 'shared/api/application'

export const createApplication = createEvent<ApplicationFormType>()

export const createApplicationFx = createEffect<
  ApplicationFormType,
  ApplicationType,
  Error
>()

forward({ from: createApplication, to: createApplicationFx })
