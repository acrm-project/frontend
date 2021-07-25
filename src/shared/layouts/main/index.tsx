import { FC } from 'react'
import { useStore } from 'effector-react'
import { onOpen, onClose } from 'lib/create-application-modal-window/model'
import { CreateApplicationForm } from 'features/create-application-from-scratch'
import { ModalWindow } from 'shared/ui/application-form-modal'
import { Layout, Children } from 'app/global-styles/common'
import { SideMenu } from 'shared/ui/side-menu'
import { Navbar } from 'shared/ui/navbar'
import { $isVisible } from 'lib/create-application-modal-window/model'
import { client, vehicle, issues } from 'shared/ui/form-sections'

export const MainLayout: FC = ({ children }) => {
  const isVisible = useStore($isVisible)
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow isVisible={isVisible} onOpen={onOpen} onClose={onClose}>
          <CreateApplicationForm
            fields={{
              client: { ...client },
              vehicle: { ...vehicle },
              issues: { ...issues },
            }}
            submitionText='Создать'
            closable={true}
          />
        </ModalWindow>
      </Layout>
    </>
  )
}
