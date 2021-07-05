import { FC } from 'react'
import { useStore } from 'effector-react'
import { MainLayout } from '../../layouts/main'
import { ModalWindow } from '../../ui/create-application-modal'
import { AddApplicationForm } from '../../features/add-application/templates/form'
import { ClientApplicationsData } from '../../ui/client-applications-data'
import {
  $isVisible,
  onClose,
  onOpen,
} from '../../lib/new-application-modal/model'
import { vehicle, issues } from '../../reusable/form/initial-form-values'

export const ClientApplicationsPage: FC = () => {
  const isVisible = useStore($isVisible)

  return (
    <MainLayout>
      <ClientApplicationsData />

      <ModalWindow isVisible={isVisible} onClose={onClose} onOpen={onOpen}>
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
