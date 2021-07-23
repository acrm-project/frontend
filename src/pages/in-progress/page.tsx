import { FC } from 'react'
import { useGate } from 'effector-react'
import { MainLayout } from 'shared/layouts/main'
import { pageMountedGate } from './model'
import { ApplicationsInProgressTable } from 'features/applications-in-progress-table'

export const ApplicationsInProgress: FC = () => {
  useGate(pageMountedGate)

  return (
    <MainLayout>
      <ApplicationsInProgressTable />
    </MainLayout>
  )
}
