// import {
//   IApplicationFromBackend,
//   ClientType,
// } from '../application-creation/types'
import { request, ResponseType } from '../request'

export const getClientById = async (id: number): Promise<any> => {
  const client = await request.get(`/clients/get/${id}`)

  return client.data
}

export const getClientsBySearchQuery = async (
  searchQuery: string
): Promise<any[]> => {
  const clients = await request.get<ResponseType<any[]>>(
    `/clients/${searchQuery}`
  )
  return clients.data.data
}

export const fetchClientApplications = async (
  clientId: number
): Promise<any[]> => {
  const clientApplications = await request.get<ResponseType<any[]>>(
    `clients/${clientId}/applications`
  )

  return clientApplications.data.data
}
