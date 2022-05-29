import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://projeto-jurema-site.herokuapp.com/',
})

export const getAnimals = async () => {
  return api.get('/animals')
}

interface Forms {
  name: string
  animalLink: string
  phone: string
}

export const sendAdoption = async (data: Forms) => {
  return api.post('/forms', data)
}

interface Payment {
  value: number
  name: string | undefined | string[]
}

export const getQR = async (data: Payment) => {
  return api.post('/pix', data)
}
