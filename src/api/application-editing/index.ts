//import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const getApplicationForEditing = async (id: number): Promise<any> => {
  const application = await request.get<ResponseType<any>>(`/${id}/edit`)

  return application.data.data
}

export const saveChangedApplication = async (
  application: any
): Promise<void> => {
  await request.put<ResponseType<void>>(`/${application.id}/save`, application)
}
