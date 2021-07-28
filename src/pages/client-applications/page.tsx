import { FC } from 'react'
import { MainLayout } from 'shared/layouts/main'
import { ModalWindow } from 'lib/application-form-modal'
import { AddApplicationForm } from 'features/add-application-to-existing-client'
import { ClientApplicationsData } from 'shared/ui/client-applications-data'
import { vehicle, issues } from 'shared/ui/form-sections'

export const ClientApplicationsPage: FC = () => {
  return (
    <MainLayout>
      <ClientApplicationsData />

      <ModalWindow>
        <AddApplicationForm
          fields={{
            vehicle: { ...vehicle },
            issues: { ...issues },
            closed: false,
          }}
          submitionText='Создать заявку'
          closable={true}
        />
      </ModalWindow>
    </MainLayout>
  )
}
