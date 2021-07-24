import { createStore, createEvent, createEffect, sample } from 'effector'

import { getClientsBySearchQuery } from 'shared/api/client'
import { $clients } from 'entities/client'

import { ClientType } from 'shared/types/client.type'

// types

// events

export const changeSearchQuery = createEvent<string>()
export const resetSearchQuery = createEvent<void>()
export const resetFetchedClients = createEvent<void>()

export const searchRequest = createEvent<void>()

// effects
export const searchRequestFx = createEffect<string, ClientType[]>()

// stores
export const $searchQuery = createStore<string>('')

// relationships

searchRequestFx.use(async (query: string) => {
  return getClientsBySearchQuery(query)
})

$searchQuery
  .on(changeSearchQuery, (_prev, searchQuery) => searchQuery)
  .reset(resetSearchQuery)

$clients
  .on(searchRequestFx.doneData, (_prev, results) => results)
  .reset(resetFetchedClients)

sample({
  clock: searchRequest,
  source: $searchQuery,
  target: searchRequestFx,
})
