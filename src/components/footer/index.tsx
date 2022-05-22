/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Container>
      <img src="/footer.png" alt="Footer Image" />
    </S.Container>
  )
}
