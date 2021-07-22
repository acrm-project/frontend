import { pending } from 'patronum'
import { searchRequestFx } from 'features/clients-search'

export const $loading = pending({ effects: [searchRequestFx] })
