import { FC, useEffect } from 'react'
import { MainLayout } from '../../shared/layouts/main'
import {
  fetchApplicationsInProgress,
  resetApplicationsInProgress,
} from './model'
import { ApplicationsInProgressTable } from '../../ui/applications-in-progress-table'

export const ApplicationsInProgress: FC = () => {
  useEffect(() => {
    fetchApplicationsInProgress()

    return () => resetApplicationsInProgress()
  }, [])

  return (
    <MainLayout>
      <ApplicationsInProgressTable />
    </MainLayout>
  )
}
