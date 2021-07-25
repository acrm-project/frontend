import { FC } from 'react'
import { CreateApplicationForm } from 'features/create-application-from-scratch'
import { Layout, Children } from 'app/global-styles/common'
import { SideMenu } from 'shared/ui/side-menu'
import { Navbar } from 'shared/ui/navbar'
import { ModalWindow } from 'features/application-form-modal'
import { client, vehicle, issues } from 'shared/ui/form-sections'

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Layout>
        <SideMenu />
        <Children>{children}</Children>

        <ModalWindow>
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
