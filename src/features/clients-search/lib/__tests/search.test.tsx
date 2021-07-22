import { render, screen } from '@testing-library/react'
import { ClientsSearch } from '../../ui'

describe('ClientSearch component', () => {
  it('renders to the DOM', () => {
    const { queryByRole } = render(<ClientsSearch />)

    const clientInput = queryByRole('textbox')
    const searchButton = queryByRole('button')

    expect(clientInput).toBeInTheDocument()
    screen.queryByPlaceholderText(/Клиент(Ф.И.О, мобильный телефон, email)/i)
    expect(clientInput).toHaveValue('')

    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent('Поиск')
  })
})
