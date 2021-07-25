import { render, screen } from '@testing-library/react'
import { OrdersSearch } from '../../ui/search'

describe('OrdersSearch component', () => {
  it('renders to the DOM', () => {
    const { queryByRole } = render(<OrdersSearch />)

    const clientInput = queryByRole('textbox')
    const searchButton = queryByRole('button')

    expect(clientInput).toBeInTheDocument()
    screen.queryByPlaceholderText(
      /Клиент, транспортное средство, No. заказ-наряда/i
    )
    expect(clientInput).toHaveValue('')

    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent('Поиск')
  })
})
