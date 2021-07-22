import { createEvent, createStore } from 'effector'
import { ClientType } from 'shared/api/client'

export const resetClient = createEvent<void>()
export const resetClients = createEvent<void>()

export const $client = createStore<ClientType | null>(null).reset(resetClient)
export const $clients = createStore<ClientType[]>([]).reset(resetClients)
