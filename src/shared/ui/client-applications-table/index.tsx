import { useStore } from 'effector-react'
import { Button } from 'antd'
import { columns } from 'shared/ui/table/table-configs'
import { tableRows } from '../../../lib/table-rows'
import { ApplicationsTable } from 'shared/ui/table'
import { ApplicationsTableContainer } from 'shared/ui/table/styled'
import { onOpen } from 'lib/application-form-modal'
import { $applications } from 'entities/application'

export const ClientApplicationsTable = (): JSX.Element => {
  const applications = useStore($applications)

  return (
    <ApplicationsTableContainer>
      <ApplicationsTable
        columns={columns}
        tableData={tableRows(applications)}
        expandble={true}
      />
      <Button
        type='primary'
        onClick={() => onOpen()}
        style={{ marginTop: '1rem' }}
      >
        Новая заявка
      </Button>
    </ApplicationsTableContainer>
  )
}
