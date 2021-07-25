import { Status } from 'shared/types/status.enum'
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

export const getAllApplications = async (clientId: number): Promise<any[]> => {
  const clientApplications = await request.get<ApplicationType[]>(
    `applications/${clientId}`
  )

  return clientApplications.data
}

export const getAplicationsInProgress = async (): Promise<any[]> => {
  const applications = await request.get<ApplicationType[]>('/in_progress/all')

  return applications.data
}

export const deleteApplication = async (id: number): Promise<void> => {
  await request.delete(`/applications/${id}/delete`)
}

export const getApplicationForEditing = async (id: number): Promise<any> => {
  const application = await request.get<ApplicationType>(`/${id}/edit`)

  return application.data
}

export const saveChangedApplication = async (
  application: any
): Promise<void> => {
  await request.put(`/${application.id}/save`, application)
}

export const changeApplicationStatus = async (
  applicationId: number,
  status: Status
): Promise<any> => {
  await request.put<any>(`/applications/${applicationId}/status/IN_PROGRESS`)
}
