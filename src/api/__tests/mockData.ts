import { ClientType } from 'shared/types/client.type'
import { ApplicationType } from 'shared/api/application/types'
import { Status } from 'shared/types/status.enum'

export const clients: Omit<ClientType, 'id'>[] = [
  {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
]

export const applicationFromBackend = {
  id: '1',
  clientId: '1',
  client: {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
  vehicle: {
    model: 'Octavia',
    brand: 'Skoda',
    yearOfIssue: '2020',
    registrationNumber: '2323RN-2',
    VIN: 'VIN',
    engineSpecification: '1.4',
  },
  issues: {
    description: 'description',
  },
  status: Status.CREATED,
  createdAt: '12.02.2020',
}

export const clientApplications = [
  {
    id: '1',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Skoda',
      yearOfIssue: '2020',
      registrationNumber: '2323RN-2',
      VIN: 'VIN',
      engineSpecification: '1.4',
    },
    issues: {
      description: 'description',
    },
    status: Status.CREATED,
    createdAt: '12.02.2020',
  },
  {
    id: '2',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Fabia',
      yearOfIssue: '2019',
      registrationNumber: '2323RN-2',
      VIN: 'VIN2',
      engineSpecification: '1.5',
    },
    issues: {
      description: 'description2',
    },
    status: Status.IN_PROGRESS,
    createdAt: '12.02.2020',
  },
]

export const application: any = {
  client: {
    name: 'Alexandr',
    surname: 'Vasilev',
    phoneNumber: '+123123',
    email: '',
  },
  vehicle: {
    model: 'Octavia',
    brand: 'Skoda',
    yearOfIssue: '2020',
    registrationNumber: '2323RN-2',
    VIN: 'VIN',
    engineSpecification: '1.4',
  },
  issues: {
    description: 'description',
  },
  closed: false,
}

export const applicationsInProgress = [
  {
    id: '1',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Skoda',
      yearOfIssue: '2020',
      registrationNumber: '2323RN-2',
      VIN: 'VIN',
      engineSpecification: '1.4',
    },
    issues: {
      description: 'description',
    },
    status: Status.IN_PROGRESS,
    createdAt: '12.02.2020',
  },
  {
    id: '2',
    clientId: '1',
    client: {
      name: 'Alexandr',
      surname: 'Vasilev',
      phoneNumber: '+123123',
      email: '',
    },
    vehicle: {
      model: 'Octavia',
      brand: 'Fabia',
      yearOfIssue: '2019',
      registrationNumber: '2323RN-2',
      VIN: 'VIN2',
      engineSpecification: '1.5',
    },
    issues: {
      description: 'description2',
    },
    status: Status.IN_PROGRESS,
    createdAt: '12.02.2020',
  },
]
