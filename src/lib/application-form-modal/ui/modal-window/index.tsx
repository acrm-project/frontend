import Modal from 'antd/lib/modal/Modal'
import { useStore } from 'effector-react'
import { onClose, $isVisible } from '../../model'

type ModalWindowProps = {
  children: any
}

export const ModalWindow = ({ children }: ModalWindowProps): JSX.Element => {
  const isVisible = useStore($isVisible)

  return (
    <>
      <Modal
        visible={isVisible}
        className='add_application_modal'
        onCancel={onClose}
        width={650}
        centered={true}
        destroyOnClose={true}
        okText='Создать заявку'
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}
