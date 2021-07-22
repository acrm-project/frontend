import { request } from '../request'

export type ClientType = {
  id: number
  name: string
  surname: string
  phoneNumber: string
  email: string
}

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
