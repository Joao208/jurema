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
  return api.get(`/projetojurema3cb96d42-staging/?${buildQueryParams(data)}`)
}

interface Payment {
  value: number
  name: string | undefined | string[]
}

export const getQR = async (data: Payment) => {
  return api.get(`/projetojurema98b98055-staging/?${buildQueryParams(data)}`)
}
