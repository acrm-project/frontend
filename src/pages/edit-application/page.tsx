import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { Spin } from 'antd'
import { MainLayout } from '../../shared/layouts/main'
import { $applicationToEdit } from '../../features/edit-application'
import { useParams } from 'react-router-dom'
import {
  fetchApplicationToEdit,
  $loading,
} from '../../features/edit-application'
import { EditApplicationForm } from '../../features/edit-application/templates/form'

export const EditApplicationPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const applicationToEdit = useStore($applicationToEdit)
  const loading = useStore($loading)

  useEffect(() => {
    fetchApplicationToEdit(id)
  }, [])

  const loadForm = () =>
    loading || !applicationToEdit ? (
      <Spin />
    ) : (
      <EditApplicationForm
        submitionText='Сохранить'
        fields={applicationToEdit}
      />
    )

  return <MainLayout>{loadForm()}</MainLayout>
}
