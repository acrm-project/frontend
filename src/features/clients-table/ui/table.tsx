import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { Empty, Table } from 'antd'
import { $clients, resetClients } from 'entities/client'
import { $loading } from 'processes/clients-fetching'
import { StyledSearchResults } from './styled'
import { columns } from '../lib/table-config'

export const ClientsTable = (): JSX.Element => {
  const loading = useStore($loading)
  const clients = useStore($clients)

  useEffect(() => {
    return () => resetClients()
  }, [])

  return (
    <StyledSearchResults>
      {clients.length ? (
        <Table
          columns={columns}
          bordered
          dataSource={clients.map((client, index) => {
            return {
              ...client,
              fullName: `${client.name} ${client.surname}`,
              key: index + 1,
            }
          })}
          loading={loading}
        />
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ marginTop: '100px' }}
        />
      )}
    </StyledSearchResults>
  )
}
