import { act, render, screen } from '@testing-library/react'
import {
  client,
  issues,
  vehicle,
} from '../../../../reusable/form/initial-form-values'
import { ModalWindow } from '../../../../shared/ui/application-form-modal'
import { AddApplicationForm } from '../../ui/form'

describe('Add application modal with form', () => {
  const onOpen = jest.fn()
  const onClose = jest.fn()
  let isVisible: boolean = false
  const fields = {
    client: { ...client },
    vehicle: { ...vehicle },
    issues: { ...issues },
  }

  beforeAll(() => {
    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm fields={fields} submitionText='Добавить заявку' />
      </ModalWindow>
    )
  })

  it('does not render to the DOM in initial', () => {
    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Описание неисправностей')
    ).not.toBeInTheDocument()
  })

  it('opens on onOpen event', () => {
    act(() => {
      isVisible = true
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm fields={fields} submitionText='Добавить заявку' />
      </ModalWindow>
    )

    expect(screen.queryByText('Автомобиль')).toBeInTheDocument()
    expect(screen.queryByText('Описание неисправностей')).toBeInTheDocument()
  })

  it('close on onClose event', () => {
    act(() => {
      isVisible = false
    })

    render(
      <ModalWindow onClose={onClose} onOpen={onOpen} isVisible={isVisible}>
        <AddApplicationForm fields={fields} submitionText='Добавить заявку' />
      </ModalWindow>
    )

    expect(screen.queryByText('Автомобиль')).not.toBeInTheDocument()
    expect(
      screen.queryByText('Описание неисправностей')
    ).not.toBeInTheDocument()
  })
})
