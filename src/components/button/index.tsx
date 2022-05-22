import Link from 'next/link'
import * as S from './styles'

interface ButtonProps {
  href?: string
  buttonText: string
  onClick?: () => any
  width?: string
  height?: string
  mobileHeight?: string
  mobileWidth?: string
}

export const Button: React.FC<ButtonProps> = ({
  href,
  onClick = () => {},
  buttonText,
  width,
  height,
  mobileHeight,
  mobileWidth,
}) => {
  if (!href)
    return (
      <S.Button
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        onClick={onClick}
        width={width}
        height={height}
      >
        {buttonText}
      </S.Button>
    )

  return (
    <Link href={href} passHref>
      <S.Button
        mobileHeight={mobileHeight}
        mobileWidth={mobileWidth}
        width={width}
        height={height}
      >
        {buttonText}
      </S.Button>
    </Link>
  )
}
