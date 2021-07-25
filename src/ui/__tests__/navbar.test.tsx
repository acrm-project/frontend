import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Navbar } from '../../shared/ui/navbar'

describe('Navbar', () => {
  it('renders to the DOM', () => {
    const { getByText } = render(<Navbar />)
    const userId = getByText(/ID: 1222032/i)

    expect(userId).toBeInTheDocument()
  })
})
