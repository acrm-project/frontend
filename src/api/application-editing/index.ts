import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const getApplicationForEditing = async (
  id: number
): Promise<IApplicationFromBackend> => {
  const application = await request.get<ResponseType<IApplicationFromBackend>>(
    `/${id}/edit`
  )

  return application.data.data
}

export const saveChangedApplication = async (
  application: IApplicationFromBackend
): Promise<void> => {
  await request.put<ResponseType<void>>(`/${application.id}/save`, application)
}
