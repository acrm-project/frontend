import { render, screen } from '@testing-library/react'
import { ClientType } from '../../api/application-creation/types'
import { ExpandedData } from '../../shared/ui/application-expanded-data'

describe('ExpandedData', () => {
  let client: ClientType = {
    id: 1,
    name: 'Andrew',
    surname: 'Brian',
    phoneNumber: '+123456789',
    email: '',
  }

  let description = 'application description text'

  it('should render application description and client information', async () => {
    render(<ExpandedData client={client} description={description} />)

    expect(
      screen.queryByText('Клиент - Andrew Brian, +123456789, ID - 1')
    ).toBeInTheDocument()
  })
})
