import { InputHTMLAttributes } from 'react'

export interface WrapperInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
}

export interface HeaderContentInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  margin?: boolean
}
