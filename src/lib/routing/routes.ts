import { Urls } from './urls'

import { ClientApplicationsPage } from 'pages/client-applications/page'
import { HomePage } from 'pages/home'
import { ClientsPage } from 'pages/clients'
import { ApplicationsInProgress } from 'pages/in-progress/page'
import { EditApplicationPage } from 'pages/edit-application/page'
import { OrdersPage } from 'pages/orders/page'
import { PrepareOrderPage } from 'pages/prepare-order/page'

export const routes = () => [
  {
    path: Urls.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: Urls.CLIENTS,
    component: ClientsPage,
    exact: true,
  },
  {
    path: Urls.CLIENT_APPLICATIONS,
    component: ClientApplicationsPage,
    exact: true,
  },
  {
    path: Urls.IN_PROGRESS,
    component: ApplicationsInProgress,
    exact: true,
  },
  {
    path: Urls.EDIT,
    component: EditApplicationPage,
    exact: true,
  },
  {
    path: Urls.ORDERS,
    component: OrdersPage,
    exact: true,
  },
  {
    path: Urls.PREPARE_ORDER,
    component: PrepareOrderPage,
    exact: true,
  },
]
