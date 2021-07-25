import { MainLayout } from 'shared/layouts/main'
import { OrdersSearch } from 'features/orders-search/ui/search'
import { $orders, $loading } from './model'
import { SearchPageContainer } from './styled'

export const OrdersPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SearchPageContainer>
        <OrdersSearch />
      </SearchPageContainer>
    </MainLayout>
  )
}
