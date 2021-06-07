import { act, render, screen } from '@testing-library/react'
import { ModalWindow } from '../create-application-modal'
import { CreateApplicationForm } from '../create-application-form'

describe('Create application modal with form', () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  let isVisible: boolean = false

  beforeAll(() => {
    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm />
      </ModalWindow>
    )
  })

  it('does not render to the DOM in initial', () => {
    expect(screen.queryByText('Клиент')).not.toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
  })

  it('opens on onOpen event', () => {
    act(() => {
      isVisible = true
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm />
      </ModalWindow>
    )

    expect(screen.queryByText('Клиент')).toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).toBeInTheDocument()
  })

  it('close on onClose event', () => {
    act(() => {
      isVisible = false
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <CreateApplicationForm />
      </ModalWindow>
    )

    expect(screen.queryByText('Клиент')).not.toBeInTheDocument()
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
  })
})
