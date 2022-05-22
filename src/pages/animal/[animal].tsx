import { GetStaticPropsContext } from 'next'
import { Detail } from 'src/styles/animals'
import * as S from 'src/styles/animal'
import { InterrogationIcon } from 'public/detailsIcons/interrogation'
import { BreeIcon } from 'public/detailsIcons/breed'
import { SizeIcon } from 'public/detailsIcons/size'
import { GenderIcon } from 'public/detailsIcons/gender'
import { VaccinesIcon } from 'public/detailsIcons/vaccines'
import { PlusIcon } from 'public/detailsIcons/plus'
import { SearchIcon } from 'public/detailsIcons/search'
import { BackgroundImage } from 'public/background'
import { Template } from 'src/components/template'
import { Button } from 'src/components/button'

interface Animal {
  id: string
  name: string
}

interface AnimalInterface {
  animal: Animal
}

const Animal: React.FC<AnimalInterface> = ({ animal }) => {
  return (
    <Template paths={['Adote um amigo', animal?.name]}>
      <S.FlexWrapper>
        <S.LeftContainer>
          <S.Title>{animal?.name}</S.Title>
          <S.SubTitle>Como ele é?</S.SubTitle>
          <S.Description>
            Ele é um garoto muito dócil e curioso, então se você gostou dele,
            esteja preparado para muita atividade.
          </S.Description>
          <S.SubTitle>Quais suas características?</S.SubTitle>
          <S.DetailsContainer>
            <Detail>
              <InterrogationIcon />
              <p>Cachorro</p>
            </Detail>

            <Detail>
              <BreeIcon />
              <p>Pit Bull</p>
            </Detail>

            <Detail>
              <SizeIcon />
              <p>Grande porte</p>
            </Detail>

            <Detail>
              <GenderIcon />
              <p>Macho</p>
            </Detail>

            <Detail>
              <VaccinesIcon />
              <p>Vacinado</p>
            </Detail>

            <Detail>
              <PlusIcon />
              <p>Castrado</p>
            </Detail>

            <Detail>
              <SearchIcon />
              <p>Curioso</p>
            </Detail>
          </S.DetailsContainer>
          <Button
            buttonText="Quero adotar ele(a)"
            href={`/animal/adopt/${animal?.id}`}
          />
        </S.LeftContainer>
        <S.ImageContainer>
          <S.Image src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png" />
          <S.Background>
            <BackgroundImage />
          </S.Background>
        </S.ImageContainer>
      </S.FlexWrapper>
    </Template>
  )
}

export default Animal

export async function getStaticPaths() {
  const posts = [{ id: '10', name: 'Stallone' }]

  const paths = posts.map((animal: Animal) => ({
    params: { animal: animal.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const animalId = params?.animal

  const animal = { id: '10', name: 'Stallone' }

  return {
    props: {
      animal,
    },
    revalidate: 1000,
  }
}
