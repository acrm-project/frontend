import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import {
  getClient,
  getClientApplications,
  $loading,
} from '../../features/client'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import { ClientDetails } from 'features/client-details'
import { Spin } from 'antd'

export const ClientApplicationsData = (): JSX.Element => {
  const loading = useStore($loading)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getClientApplications(+id)
    getClient(+id)
  }, [])

  if (loading) {
    return <Spin />
  }

  return (
    <>
      <ClientDetails />
      <ClientApplicationsTable />
    </>
  )
}
