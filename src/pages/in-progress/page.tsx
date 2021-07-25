import { FC } from 'react'
import { useGate } from 'effector-react'
import { MainLayout } from 'shared/layouts/main'
import { ApplicationsInProgressTable } from 'features/applications-in-progress-table'
import { pageMountedGate } from './model'

export const ApplicationsInProgress: FC = () => {
  useGate(pageMountedGate)

  return (
    <MainLayout>
      <ApplicationsInProgressTable />
    </MainLayout>
  )
}
