import { FC } from 'react'
import { useStore } from 'effector-react'
import { $clientDetails } from '../model'
import { Details, ClientName } from './styled'

export const ClientDetails: FC = () => {
  const clientDetails = useStore($clientDetails)

  return (
    <Details>
      <ClientName>{`${clientDetails.client} - ${clientDetails.applicationsLength} заявок`}</ClientName>
    </Details>
  )
}
