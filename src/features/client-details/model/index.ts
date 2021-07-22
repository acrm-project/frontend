import { combine } from 'effector'
import { $client } from 'entities/client'
import { $applications } from 'entities/application'

export const $clientDetails = combine(
  $client,
  $applications,
  (client, applications) => ({
    client: `${client?.name} ${client?.surname}`,
    applicationsLength: applications.length,
  })
)
