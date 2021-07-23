import { useStore } from 'effector-react'
import { Spin } from 'antd'
import { $applicationsInProgress } from 'entities/application'
import { columns } from 'shared/ui/table/table-configs'
import { tableRows } from 'lib/table-rows'
import { ApplicationsTableContainer } from 'shared/ui/table/styled'
import { ApplicationsTable } from 'shared/ui/table'

export const ApplicationsInProgressTable = (): JSX.Element => {
  const applicationsInProgress = useStore($applicationsInProgress)
  // const loading = useStore($loading)

  // if (loading) {
  //   return <Spin />
  // }

  return (
    <ApplicationsTableContainer>
      <ApplicationsTable
        columns={columns}
        tableData={tableRows(applicationsInProgress)}
        expandble={true}
      />
    </ApplicationsTableContainer>
  )
}
