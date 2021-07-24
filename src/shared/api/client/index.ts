import { request } from '../request'
import { ClientType } from 'shared/types/client.type'

export const getClientById = async (id: number): Promise<ClientType> => {
  const client = await request.get(`/clients/get/${id}`)

  return client.data
}

export const getClientsBySearchQuery = async (
  searchQuery: string
): Promise<ClientType[]> => {
  const clients = await request.get(`/clients/${searchQuery}`)
  return clients.data
}
