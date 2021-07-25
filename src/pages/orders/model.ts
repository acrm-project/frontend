import { createStore } from 'effector'
import { pending } from 'patronum'
import { getOrdersFx } from 'features/orders-search'

export const $orders = createStore<any>([]).on(
  getOrdersFx.doneData,
  (_, orders) => orders
)

export const $loading = pending({ effects: [getOrdersFx] })
