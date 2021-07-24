import { createEffect, createEvent, createStore, forward } from 'effector'
import { ClientType } from 'shared/types/client.type'

export const getClient = createEvent<number>()
export const resetClient = createEvent<void>()
export const resetClients = createEvent<void>()

export const getClientFx = createEffect<number, ClientType, Error>()

export const $client = createStore<ClientType | null>(null).reset(resetClient)
export const $clientId = $client.map((client) => (client ? client.id : 1))
export const $clients = createStore<ClientType[]>([]).reset(resetClients)

forward({ from: getClient, to: getClientFx })

getClientFx.use(async (id) => {
  return {} as ClientType
})
