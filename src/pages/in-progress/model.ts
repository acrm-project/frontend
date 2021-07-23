import { forward } from 'effector'
import { pending } from 'patronum'
import { createGate } from 'effector-react'
import { getApplicationsInProgressFx } from 'entities/application'

export const pageMountedGate = createGate()

forward({ from: pageMountedGate.open, to: getApplicationsInProgressFx })

export const $loading = pending({ effects: [getApplicationsInProgressFx] })
