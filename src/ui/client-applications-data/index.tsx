import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getClient } from 'entities/client'
import { getApplications } from 'entities/application'
import { ClientApplicationsTable } from '../../ui/client-applications-table'
import { ClientDetails } from 'features/client-details'
import { Spin } from 'antd'

export const ClientApplicationsData = (): JSX.Element => {
  // const loading = useStore($loading)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    getApplications(+id)
    getClient(+id)
  }, [])

  // if (loading) {
  //   return <Spin />
  // }

  return (
    <>
      <ClientDetails />
      <ClientApplicationsTable />
    </>
  )
}
