import { InputHTMLAttributes } from 'react'

export interface HamburgerContainerInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  opened?: boolean
}

export interface MenuInterface extends InputHTMLAttributes<HTMLInputElement> {
  opened?: boolean
}
