import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'

interface HeaderProps {
  showBorder?: boolean
}

export const Header: React.FC<HeaderProps> = ({ showBorder = true }) => {
  const [opened, setOpened] = useState(false)
  const [dimensions, setDimensions] = useState([0, 0])

  const openOrClose = useCallback(() => {
    setOpened(!opened)

    const element = document.getElementById('scroll-container')

    if (element && !opened) {
      element.style.overflowY = 'hidden'
    }

    if (element && opened) {
      element.style.overflowY = 'scroll'
    }
  }, [opened, setOpened])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () =>
        setDimensions([window.innerWidth, window.innerHeight])
      )

      setDimensions([window.innerWidth, window.innerHeight])
    }
  }, [setDimensions])

  return (
    <>
      <S.Container showBorder={showBorder}>
        <Link href="/" passHref>
          <S.LogoContainer>
            <Image
              src="/logo.png"
              alt="Jurema Logo"
              width="47px"
              height="38px"
            />
          </S.LogoContainer>
        </Link>
        <S.LeftContainer>
          <Link href="/animals" passHref>
            <S.Text>Adote</S.Text>
          </Link>
          <Link href="/donate" passHref>
            <S.Text>Doe</S.Text>
          </Link>
          <Link href="/#denounce" passHref>
            <S.Text>Denuncie</S.Text>
          </Link>
          <Link href="/donate" passHref>
            <S.Button>Contribua</S.Button>
          </Link>
        </S.LeftContainer>
        <S.HamburgerContainer onClick={openOrClose} opened={opened}>
          <span />
          <span />
          <span />
        </S.HamburgerContainer>
      </S.Container>

      <S.Menu height={dimensions[1] - 96} opened={opened}>
        <S.TitleMenu>Navegue pelo site</S.TitleMenu>
        <Link href="/animals" passHref>
          <S.Option>Adote</S.Option>
        </Link>
        <Link href="/donate" passHref>
          <S.Option>Doe</S.Option>
        </Link>
        <Link href="/#denounce" passHref>
          <S.Option>Denuncie</S.Option>
        </Link>
        <Link href="/donate" passHref>
          <S.Option>Contribua</S.Option>
        </Link>

        <S.TitleMenu>Contato</S.TitleMenu>
        <S.Option>E-mail: hnp.pozer@gmail.com</S.Option>
        <S.Option>Telefone: +55 19 98921-9327</S.Option>

        <S.TitleMenu>Nossas redes sociais</S.TitleMenu>
        <S.Option>Facebook</S.Option>
        <S.Option>Instagram</S.Option>
      </S.Menu>
    </>
  )
}
