import Link from 'next/link'
import { useTheme } from '@aws-amplify/ui-react'
import { LoadingIcon } from 'public/loading'
import * as S from './styles'

interface ButtonProps {
  href?: string
  buttonText: string
  onClick?: () => any
  width?: string
  height?: string
  mobileHeight?: string
  mobileWidth?: string
  isLoading?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  href,
  onClick = () => {},
  buttonText,
  width,
  height,
  mobileHeight,
  mobileWidth,
  isLoading,
  disabled,
  ...props
}) => {
  const { tokens } = useTheme()

  if (!href)
    return (
      <S.Button
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        onClick={!isLoading ? onClick : () => {}}
        width={width}
        isLoading={isLoading}
        height={height}
        disabled={disabled}
        tokens={tokens}
        {...props}
      >
        {isLoading ? <LoadingIcon /> : buttonText}
      </S.Button>
    )

  return (
    <Link href={href} passHref>
      <S.Button
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        width={width}
        isLoading={isLoading}
        height={height}
        tokens={tokens}
        disabled={disabled}
        {...props}
      >
        {isLoading ? <LoadingIcon /> : buttonText}
      </S.Button>
    </Link>
  )
}
