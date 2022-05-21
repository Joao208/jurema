import { InputHTMLAttributes } from 'react'

export interface LabelInterface extends InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean
}
