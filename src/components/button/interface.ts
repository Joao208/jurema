import { InputHTMLAttributes } from 'react'

export interface ButtonInterface extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
  height?: string
  mobileHeight?: string
  isLoading?: boolean
  mobileWidth?: string
}
