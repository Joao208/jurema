import { Logo } from 'public/logo'
import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'

export const Header = () => {
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
      <S.Container>
        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>
        <S.LeftContainer>
          <S.Text>Adote</S.Text>
          <S.Text>Adote</S.Text>
          <S.Text>Adote</S.Text>
          <S.Button>Contribua</S.Button>
        </S.LeftContainer>
        <S.HamburgerContainer onClick={openOrClose} opened={opened}>
          <span />
          <span />
          <span />
        </S.HamburgerContainer>
      </S.Container>
      <S.Menu height={dimensions[1] - 96} opened={opened}>
        <S.TitleMenu>Navegue pelo site</S.TitleMenu>
        <S.Option>Adote</S.Option>
        <S.Option>Doe</S.Option>
        <S.Option>Denuncie</S.Option>
        <S.Option>Adote</S.Option>
        <S.Option>Contribua</S.Option>

        <S.TitleMenu>Contato</S.TitleMenu>
        <S.Option>E-mail: email@exemplo.com</S.Option>
        <S.Option>Telefone: +55 (19) 99123-XXXX</S.Option>

        <S.TitleMenu>Nossas redes sociais</S.TitleMenu>
        <S.Option>Facebook</S.Option>
        <S.Option>Instagram</S.Option>
      </S.Menu>
    </>
  )
}
