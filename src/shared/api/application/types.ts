import { ClientType } from 'shared/types/client.type'
import { VehicleType } from 'shared/types/vehicle.type'
import { IssuesType } from 'shared/types/issues.type'

export type ApplicationType = {
  id: number
  clientId: number
  vehicle: any
  issues: any
  status: any
  createdAt: any
  startedAt: any
  closedAt: any
  closed: boolean
}

export type ApplicationFormType = {
  client: Omit<ClientType, 'id'>
  vehicle: VehicleType
  issues: IssuesType
}
