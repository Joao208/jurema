import type { NextPage } from 'next'
import { DonateImage } from 'public/donate'
import { GiftImage } from 'public/gift'
import { ONGImage } from 'public/ong'
import { PoliceImage } from 'public/police'
import { Button } from 'src/components/button'
import { Footer } from 'src/components/footer'
import { DefaultHead } from 'src/components/head'
import { Header } from 'src/components/header'
import { loader } from 'src/utils/loader'
import * as S from '../styles'

const Home: NextPage = () => {
  const cards = [
    {
      title: 'Compre e concorra',
      description:
        'Quanto mais bilhetes comprar, maiores são suas chances de ganhar prêmios únicos.',
      type: 'normal',
      buttonContent: 'Em breve',
      buttonHref: '/',
      image: <GiftImage />,
      disabled: true,
    },
    {
      title: 'Doe',
      description:
        'Para ajudar o projeto a se manter, você pode fazer doações facilmente através de PIX.',
      type: 'reverse',
      buttonContent: 'Doar',
      buttonHref: '/donate',
      image: <DonateImage />,
    },
    {
      title: 'Adote um amigo',
      description:
        'Você pode mudar a vida de um de nossos animais. Há vários deles esperando para fazer parte de uma família.',
      type: 'normal',
      buttonContent: 'Ver animais',
      buttonHref: '/animals',
      image: <ONGImage />,
    },
  ]

  return (
    <>
      <DefaultHead />
      <S.Scroll>
        <S.HeaderContent>
          <Header showBorder={false} />
        </S.HeaderContent>
        <S.ImageHeader title="Follow we on LinkedIn.com">
          <S.FilterImage />

          <S.CustomImage
            src="/header.png"
            quality="100"
            placeholder="blur"
            priority
            layout="fill"
            objectFit="cover"
            blurDataURL="/header.png"
            loader={loader}
          />

          <S.Title>Não compre, adote.</S.Title>
          <S.Description>
            Encontre seu novo amigo e torne o mundo um lugar um pouco mais
            aconchegante.
          </S.Description>

          <Button href="/animals" buttonText="Ver animais" width="244px" />
        </S.ImageHeader>

        {cards.map((card) => (
          <S.Wrapper type={card.type} key={card.title}>
            <S.Content type={card.type}>
              <S.TitleContent>{card.title}</S.TitleContent>
              <S.DescriptionContent>{card.description}</S.DescriptionContent>
              <Button
                disabled={card.disabled}
                buttonText={card.buttonContent}
                mobileWidth="189px"
                width="245px"
                href={card.buttonHref}
              />
            </S.Content>
            {card.image}
          </S.Wrapper>
        ))}

        <S.Wrapper id="denounce" height="587.03px" type="reverse">
          <S.Content type="reverse">
            <S.TitleContent>Saiba como denunciar</S.TitleContent>
            <S.DescriptionContent>
              Você pode denunciar casos de animais sendo abandonados, agredidos,
              vivendo em más condições ou soltos em ruas. Basta ligar para um
              dos números abaixo:
            </S.DescriptionContent>
            <S.WrapperContent>
              <S.NumberToCallContainer>
                <S.NumberToCall>153</S.NumberToCall>
                <S.NumberToCallText>Guarda Civil</S.NumberToCallText>
              </S.NumberToCallContainer>

              <S.NumberToCallContainer>
                <S.NumberToCall>190</S.NumberToCall>
                <S.NumberToCallText>Polícia Militar</S.NumberToCallText>
              </S.NumberToCallContainer>
            </S.WrapperContent>
          </S.Content>
          <PoliceImage />
        </S.Wrapper>

        <Footer />
      </S.Scroll>
    </>
  )
}

export default Home
