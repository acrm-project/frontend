import { FC, useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import { MainLayout } from 'shared/layouts/main'
import { $applicationToEdit } from 'features/application-editing'
import { fetchApplicationToEdit, $loading } from 'features/application-editing'
import { EditApplicationForm } from 'features/application-editing'

export const EditApplicationPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const applicationToEdit = useStore($applicationToEdit)
  const loading = useStore($loading)

  useEffect(() => {
    // fetchApplicationToEdit(id)
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
