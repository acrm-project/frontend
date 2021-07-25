import { createStore, createEvent, createEffect, forward } from 'effector'

// types

// events

export const changeSearchQuery = createEvent<string>()
export const resetSearchQuery = createEvent<void>()
export const getOrders = createEvent<void>()

// effects

export const getOrdersFx = createEffect<any, any>()

// stores

export const $searchQuery = createStore<string>('')
  .on(changeSearchQuery, (_, query) => query)
  .reset(resetSearchQuery)

// relationships

forward({ from: getOrders, to: getOrdersFx })
