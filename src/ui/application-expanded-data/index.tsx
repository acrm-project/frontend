import { ClientType } from 'shared/types/client.type'
import {
  DescriptionInfo,
  ClientInfo,
  CreateDate,
  StartDate,
  DateContainer,
} from './styled'

type ExpandedDataType = {
  client?: ClientType
  createDate: string
  startedAt?: string
  closedAt?: string
  description: string
  closed?: boolean
}

const formattedClient = (client: ClientType) =>
  `${client.name} ${client.surname}, ${client.phoneNumber}, ID - ${client.id}`

const formattedDate = (date: string) => `${date.slice(0, 10)}`

export const ExpandedData = ({
  client,
  description,
  startedAt,
  closedAt,
  closed,
  createDate,
}: ExpandedDataType): JSX.Element => {
  const showStartOrClosedDate = () => {
    if (closed) return <StartDate>{`Закрытие заявки - ${closedAt}`}</StartDate>
    if (startedAt) return <StartDate>{`Старт заявки - ${startedAt}`}</StartDate>
  }

  return (
    <>
      <DescriptionInfo>{description}</DescriptionInfo>
      <DateContainer>
        <CreateDate>{`Дата создания заявки - ${formattedDate(
          createDate
        )}`}</CreateDate>
        {showStartOrClosedDate()}
      </DateContainer>

      {client ? (
        <ClientInfo>
          <h4>Клиент - {formattedClient(client)}</h4>
        </ClientInfo>
      ) : null}
    </>
  )
}
