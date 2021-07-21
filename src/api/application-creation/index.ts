import { request, ResponseType } from '../request'
import { IApplicationFromScratch, NewClientApplicationType } from './types'

export const addNewApplication = (
  clientId: number,
  application: NewClientApplicationType
): Promise<ResponseType<void>> =>
  request.post(`application-creation/${clientId}/add-new`, application)
