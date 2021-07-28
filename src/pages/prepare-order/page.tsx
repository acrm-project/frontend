import { Tabs } from 'antd'
import { OrderDetails } from 'features/order-creation'
import { MainLayout } from 'shared/layouts/main'
import { ApplicationForOrder } from 'shared/ui/application-for-order'

const { TabPane } = Tabs

export const PrepareOrderPage = (): JSX.Element => {
  return (
    <MainLayout>
      <Tabs defaultActiveKey='1' style={{ marginLeft: '1rem' }}>
        <TabPane tab='Общая информация' key='1'>
          <ApplicationForOrder />
        </TabPane>
        <TabPane tab='Детали акта' key='2'>
          <OrderDetails />
        </TabPane>
      </Tabs>
    </MainLayout>
  )
}
