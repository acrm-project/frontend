import { FC } from 'react'
import { MainLayout } from '../../shared/layouts/main'
import { ClientsSearch } from '../../features/clients-search/templates/search'
import { ClientsTable } from '../../ui/clients-table'
import { SearchPageContainer } from './styled'

export const ClientsPage: FC = () => {
  return (
    <MainLayout>
      <SearchPageContainer>
        <ClientsSearch />
        <ClientsTable />
      </SearchPageContainer>
    </MainLayout>
  )
}
