import { NextPage } from 'next'
import Link from 'next/link'
import { BreeIcon } from 'public/detailsIcons/breed'
import { GenderIcon } from 'public/detailsIcons/gender'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/header'
import { Navigation } from 'src/components/navigation'
import { HeaderContent, Scroll } from 'src/styles'
import * as S from 'src/styles/animals'

const emptyAnimals = () => {
  return <></>
}

const Animals: NextPage = () => {
  const animals = new Array(5).fill({})

  return (
    <Scroll>
      <S.HeaderContent>
        <Header />
      </S.HeaderContent>
      <S.Container>
        <Navigation paths={['Adote um amigo']} />
        <S.Title>Adote um amigo</S.Title>
        <S.FlexWrapper>
          {animals.map((animal, index) => (
            <Link key={index} href={`/animal/10`} passHref>
              <S.Card>
                <S.CardImage src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png" />
                <S.CardTitle>Stallone</S.CardTitle>

                <S.DetailContainer>
                  <S.Detail>
                    <BreeIcon />
                    <p>Pit Bull</p>
                  </S.Detail>
                </S.DetailContainer>

                <S.DetailContainer>
                  <S.Detail>
                    <GenderIcon />
                    <p>Sexo</p>
                  </S.Detail>
                </S.DetailContainer>
              </S.Card>
            </Link>
          ))}
        </S.FlexWrapper>
      </S.Container>
      <Footer />
    </Scroll>
  )
}

export default Animals
