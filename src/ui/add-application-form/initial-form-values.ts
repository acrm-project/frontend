import { ApplicationType } from '../../api/application-creation/types'

export const initialValues: ApplicationType = {
  client: {
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
  },
  vehicle: {
    brand: '',
    model: '',
    yearOfIssue: '',
    engineSpecification: '',
    registrationNumber: '',
    VIN: '',
  },
  issues: {
    description: '',
  },
}
