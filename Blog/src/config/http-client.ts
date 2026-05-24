import axios from 'axios'
import { baseUrl } from './api'

const httpClient = axios.create({
  baseURL: baseUrl
})

export const get = httpClient.get
export const post = httpClient.post
export const put = httpClient.put
export const del = httpClient.delete