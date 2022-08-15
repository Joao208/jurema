import { useCallback, useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { DataStore } from 'aws-amplify'
import { AnimalsModel as AnimalsModels } from 'src/models'
import { BreedIcon } from 'public/detailsIcons/breed'
import { GenderIcon } from 'public/detailsIcons/gender'
import { EmptyIcon } from 'public/empty'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { Description, FlexWrapperSuccess, SubTitle } from 'src/styles/animal'
import * as S from 'src/styles/animals'
import { formatAnimal } from 'src/utils/formatAnimal'
import { loader } from 'src/utils/loader'

export interface Animal {
  id: string
  name: string
  breed: string
  sex: string
  photoKey: string
  species: string
  size: string
  is_castrated: boolean
  personality: string
  description?: string
  fiv: boolean
  felv: boolean
  photo?: string
}

const AnimalComponente = ({
  index,
  animal,
}: {
  index: number
  animal: Animal
}) => {
  const [image, setImage] = useState(animal?.photo || '/image404.png')
  const [imageError, setImageError] = useState(false)

  const handleErrorImage = useCallback(() => {
    setImage('/image404.png')
    setImageError(true)
  }, [])

  return (
    <Link key={index} href={`/animal/${animal.id}`} passHref>
      <S.Card>
        <S.CardImage
          onErrorCapture={handleErrorImage}
          placeholder="blur"
          src={imageError ? '/image404.png' : image}
          width="100%"
          height="100%"
          layout="responsive"
          unoptimized
          loader={loader}
          blurDataURL={imageError ? '/image404.png' : image}
        />
        <S.CardTitle>{animal.name}</S.CardTitle>

        <S.DetailContainer>
          <S.Detail>
            <BreedIcon />
            <p>{animal.breed}</p>
          </S.Detail>
        </S.DetailContainer>

        <S.DetailContainer>
          <S.Detail>
            <GenderIcon />
            <p>{animal.sex}</p>
          </S.Detail>
        </S.DetailContainer>
      </S.Card>
    </Link>
  )
}

const Loading = () => {
  return (
    <>
      <S.Card isLoading />
      <S.Card isLoading />
      <S.Card isLoading />
      <S.Card isLoading />
    </>
  )
}

const EmptyAnimals: React.FC = () => {
  return (
    <FlexWrapperSuccess>
      <div>
        <SubTitle>Nenhum animal por aqui</SubTitle>

        <Description style={{ maxWidth: 603 }}>
          Todos os animais do Projeto Jurema já encontraram um lar! Mas o mundo
          não é um lugar seguro para eles, por isso em pouco tempo resgataremos
          mais deles e você poderá ajudá-los.
        </Description>

        <Button
          href="/"
          mobileWidth="211px"
          width="280px"
          buttonText="Voltar para o início"
        />
      </div>

      <div className="icon">
        <EmptyIcon />
      </div>
    </FlexWrapperSuccess>
  )
}

const Animals: NextPage = () => {
  const [animals, setAnimals] = useState<
    ({
      [key: string]: string
    } | void)[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBackend = async () => {
      setIsLoading(true)

      const models = (await DataStore.query(AnimalsModels)) as unknown as {
        [key: string]: string
      }[]

      const animalsWithImage = await Promise.all(models.map(formatAnimal))

      if (animalsWithImage.length) setAnimals(animalsWithImage)
      setIsLoading(false)
    }

    fetchBackend()
  }, [])

  return (
    <Template
      paths={[{ path: '/animals', label: 'Adote um amigo' }]}
      title="Adote um amigo"
    >
      <S.FlexWrapper>
        {isLoading && <Loading />}
        {!isLoading &&
          (animals.length ? (
            // @ts-ignore
            animals.map((animal: Animal, index) => (
              <AnimalComponente
                key={animal?.id}
                index={index}
                animal={animal}
              />
            ))
          ) : (
            <EmptyAnimals />
          ))}
      </S.FlexWrapper>
    </Template>
  )
}

export default Animals
