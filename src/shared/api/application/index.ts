import { request, ResponseType } from '../request'

export type ApplicationType = {
  id: number
  clientId: number
  vehicle: any
  issues: any
  status: any
  createdAt: any
  startedAt: any
  closedAt: any
  closed: boolean
}

export type ApplicationFormType = {
  client: any
  vehicle: any
  issues: any
}

export const createApplicationFromScratch = async (
  applicationFormData: ApplicationFormType
): Promise<ApplicationType> => {
  const application = await request.post(
    '/applications/create',
    applicationFormData
  )
  return application.data
}

// export const addNewApplication = (
//   clientId: number,
//   application: NewClientApplicationType
// ): Promise<ResponseType<void>> =>
//   request.post(`application-creation/${clientId}/add-new`, application)
