import { InputHTMLAttributes } from 'react'

export interface CardAnimalInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}
