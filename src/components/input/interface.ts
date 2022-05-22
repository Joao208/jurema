import { InputHTMLAttributes } from 'react'

export interface LabelInterface extends InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean
}

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}
