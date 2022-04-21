import { InputHTMLAttributes } from 'react'

export interface WrapperInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
}
