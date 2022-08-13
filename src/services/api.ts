import axios from 'axios'
import { buildQueryParams } from 'src/utils/buildQueryParams'

export const api = axios.create({
  baseURL: 'https://m1b4jzz5e3.execute-api.us-east-2.amazonaws.com/staging',
})

interface Forms {
  name: string
  animalLink: string
  phone: string
}

export const sendAdoption = async (data: Forms) => {
  return api.get(
    `/projetojuremasitede451c9b-staging/?${buildQueryParams(data)}`
  )
}

interface Payment {
  value: number
  name: string | undefined | string[]
}

export const getQR = async (data: Payment) => {
  return api.get(
    `/projetojuremasite8dfa48da-staging/?${buildQueryParams(data)}`
  )
}
