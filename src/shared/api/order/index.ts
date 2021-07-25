import { request } from '../request'

export const getApplicationForPrepare = async (id: number): Promise<any> => {
  const application = await request.get<any>(`/applications/${id}`)

  return application.data
}
