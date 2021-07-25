import { Table } from 'antd'
import { ExpandedData } from 'shared/ui/application-expanded-data'

type ApplicationsTableType = {
  columns: any
  tableData: any
  expandble: boolean
}

export const ApplicationsTable = ({
  columns,
  tableData,
  expandble,
}: ApplicationsTableType): JSX.Element => {
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      expandable={{
        expandedRowRender: (record) => {
          return (
            <ExpandedData
              createDate={record.createdAt}
              client={record.client}
              startedAt={record.startedAt}
              description={record.description}
              closedAt={record.closedAt}
              closed={record.closed}
            />
          )
        },
        rowExpandable: () => !!expandble,
      }}
      pagination={false}
    />
  )
}
