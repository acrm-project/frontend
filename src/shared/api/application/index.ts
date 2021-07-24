import { request } from '../request'
import { ApplicationType, ApplicationFormType } from './types'

export const createApplicationFromScratch = async (
  applicationFormData: ApplicationFormType
): Promise<ApplicationType> => {
  const application = await request.post(
    '/applications/create',
    applicationFormData
  )
  return application.data
}

export const addNewApplication = async (
  clientId: number,
  applicationFormData: Omit<ApplicationFormType, 'client'>
): Promise<void> => {
  const application = await request.post(
    `applications/${clientId}/add`,
    applicationFormData
  )
  return application.data
}
