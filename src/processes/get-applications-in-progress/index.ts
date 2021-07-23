import { forward } from 'effector'
import {
  $applicationsInProgress,
  getApplicationsInProgress,
  getApplicationsInProgressFx,
} from 'entities/application'

forward({ from: getApplicationsInProgress, to: getApplicationsInProgressFx })

getApplicationsInProgressFx.use(() => {
  ///api
  return []
})

$applicationsInProgress.on(
  getApplicationsInProgressFx.doneData,
  (_, applications) => applications
)
