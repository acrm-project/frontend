import Modal from 'antd/lib/modal/Modal'

type ModalWindowProps = {
  children: any
  onOpen: () => void
  onClose: () => void
  isVisible: boolean
}

export const ModalWindow = ({
  children,
  onClose,
  isVisible,
}: ModalWindowProps): JSX.Element => {
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
