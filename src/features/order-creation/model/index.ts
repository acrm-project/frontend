import { createEvent, createEffect, guard, createStore } from 'effector'
import { getApplicationForPrepare } from 'shared/api/order'
import { historyPush } from 'lib/routing/history'

export const prepareApplicationForOrder = createEvent<number>()
export const resetPreparedOrder = createEvent()
export const createOrder = createEvent<any>()

// effects

export const prepareApplicationForOrderFx = createEffect<number, any>()

// stores
export const $preparedApplication = createStore<any | null>(null)
  .on(prepareApplicationForOrderFx.doneData, (_, application) => application)
  .reset(resetPreparedOrder)

const $isOrder = $preparedApplication.map((application) => application === null)

// relations

guard({
  clock: prepareApplicationForOrder,
  filter: $isOrder,
  target: prepareApplicationForOrderFx,
})

prepareApplicationForOrderFx.use(async (id) => {
  return getApplicationForPrepare(id)
})

prepareApplicationForOrderFx.done.watch(({ params }) => {
  historyPush(`/orders/prepare/${params}`)
})
