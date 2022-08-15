import axios from 'axios'
import { buildQueryParams } from 'src/utils/buildQueryParams'

export const api = axios.create({
  baseURL:
    'https://m1b4jzz5e3.execute-api.us-east-2.amazonaws.com/projetojurema',
})

export const sendAdoption = async (data: any) => {
  return api.get(
    `/projetojuremasitede451c9b-staging/?${buildQueryParams(data)}`
  )
}

export const getQR = async (data: any) => {
  return api.get(
    `/projetojuremasite8dfa48da-staging/?${buildQueryParams(data)}`
  )
}
