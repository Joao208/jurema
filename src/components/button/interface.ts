import { InputHTMLAttributes } from 'react'
import { useTheme } from '@aws-amplify/ui-react/dist/types/hooks/useTheme'

export interface ButtonInterface extends InputHTMLAttributes<HTMLInputElement> {
  width?: string
  height?: string
  mobileHeight?: string
  isLoading?: boolean
  mobileWidth?: string
  disabled?: boolean
  tokens: ReturnType<typeof useTheme>['tokens']
}
