import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { Search } from 'shared/ui/search'
import {
  $searchQuery,
  changeSearchQuery,
  getOrders,
  resetSearchQuery,
} from '../model'

export const OrdersSearch = (): JSX.Element => {
  const searchQuery = useStore($searchQuery)

  useEffect(() => resetSearchQuery(), [])

  return (
    <Search
      searchQuery={searchQuery}
      changeSearchQuery={changeSearchQuery}
      trigger={getOrders}
      placeholderText='Клиент, транспортное средство, No. заказ-наряда'
    />
  )
}
