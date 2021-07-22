import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { Search } from 'shared/ui/search'
import {
  changeSearchQuery,
  searchRequest,
  $searchQuery,
  resetSearchQuery,
} from '../model'

export const ClientsSearch = (): JSX.Element => {
  const searchQuery = useStore($searchQuery)

  useEffect(() => resetSearchQuery(), [])

  return (
    <Search
      searchQuery={searchQuery}
      changeSearchQuery={changeSearchQuery}
      trigger={searchRequest}
      placeholderText='Клиент(Ф.И.О, мобильный телефон, email)'
    />
  )
}
