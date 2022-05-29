import Link from 'next/link'
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
  ...props
}) => {
  if (!href)
    return (
      <S.Button
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        onClick={!isLoading ? onClick : () => {}}
        width={width}
        isLoading={isLoading}
        height={height}
        {...props}
      >
        {isLoading ? <LoadingIcon /> : buttonText}
      </S.Button>
    )

  return (
    <Link href={href} passHref>
      <S.Button
        {...props}
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        width={width}
        isLoading={isLoading}
        height={height}
      >
        {isLoading ? <LoadingIcon /> : buttonText}
      </S.Button>
    </Link>
  )
}
