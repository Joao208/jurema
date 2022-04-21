import type { NextPage } from 'next'
import { DonateImage } from 'public/donate'
import { GiftImage } from 'public/gift'
import { ONGImage } from 'public/ong'
import { PoliceImage } from 'public/police'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/header'
import * as S from '../styles'

const Home: NextPage = () => {
  const cards = [
    {
      title: 'Compre e concorra',
      description:
        'Quanto mais bilhetes comprar, maiores são suas chances de ganhar prêmios únicos.',
      type: 'normal',
      buttonContent: 'Ver prêmios',
      buttonHref: '/',
      image: <GiftImage />,
    },
    {
      title: 'Doe',
      description:
        'Para ajudar o projeto a se manter, você pode fazer doações facilmente através de PIX.',
      type: 'reverse',
      buttonContent: 'Doar',
      buttonHref: '/',
      image: <DonateImage />,
    },
    {
      title: 'Adote um amigo',
      description:
        'Você pode mudar a vida de um de nossos animais. Há vários deles esperando para fazer parte de uma família.',
      type: 'normal',
      buttonContent: 'Ver animais',
      buttonHref: '/',
      image: <ONGImage />,
    },
  ]

  return (
    <div>
      <Header />
      <S.ImageHeader title="Follow we on LinkedIn.com">
        <S.Title>Não compre, adote.</S.Title>
        <S.Description>
          Encontre seu novo amigo e torne o mundo um lugar um pouco mais
          aconchegante.
        </S.Description>
        <S.Button>Ver animais</S.Button>
      </S.ImageHeader>

      {cards.map((card) => (
        <S.Wrapper type={card.type} key={card.title}>
          <S.Content>
            <S.TitleContent>{card.title}</S.TitleContent>
            <S.DescriptionContent>{card.description}</S.DescriptionContent>
            <S.ButtonContent>{card.buttonContent}</S.ButtonContent>
          </S.Content>
          {card.image}
        </S.Wrapper>
      ))}

      <S.Wrapper height="587.03px" type="reverse">
        <S.Content>
          <S.TitleContent>Saiba como denunciar</S.TitleContent>
          <S.DescriptionContent>
            Você pode denunciar casos de animais sendo abandonados, agredidos,
            vivendo em más condições ou soltos em ruas. Basta ligar para um dos
            números abaixo:
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
    </div>
  )
}

export default Home
