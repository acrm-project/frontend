//import { IApplicationFromBackend } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const fetchAllInProgress = async (): Promise<any[]> => {
  const applications = await request.get<ResponseType<any[]>>(
    '/in_progress/all'
  )

  return applications.data.data
}
