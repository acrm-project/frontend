import axios from 'axios'

export type ResponseType<D> = {
  status: any
  data: D
}

export const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_INSTANCE_URL,
})
