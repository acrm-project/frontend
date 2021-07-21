import { Tabs } from 'antd'
import { MainLayout } from '../../shared/layouts/main'
import { ApplicationForOrder } from '../../ui/application-for-order'
import { OrderDetails } from '../../ui/order-details'

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
