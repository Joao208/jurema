import { NextPage } from 'next'
import Link from 'next/link'
import { BreedIcon } from 'public/detailsIcons/breed'
import { GenderIcon } from 'public/detailsIcons/gender'
import { EmptyIcon } from 'public/empty'
import { useEffect, useState } from 'react'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { getAnimals } from 'src/services/api'
import { Description, FlexWrapperSuccess, SubTitle } from 'src/styles/animal'
import * as S from 'src/styles/animals'

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

export interface Animal {
  id: number
  name: string
  breed: string
  sex: string
  photo: string
  species: string
  size: string
  is_castrated: string
  personality: string
  animalLink: string
}

const Animals: NextPage = () => {
  const [animals, setAnimals] = useState<Animal[]>([])

  useEffect(() => {
    const fetchBackend = async () => {
      const { data: apiResponse } = await getAnimals()

      setAnimals(apiResponse)
    }

    fetchBackend()
  }, [])

  return (
    <Template
      paths={[{ path: '/animals', label: 'Adote um amigo' }]}
      title="Adote um amigo"
    >
      <S.FlexWrapper>
        {animals.length ? (
          animals.map((animal: Animal, index) => (
            <Link key={index} href={`/animal/${animal.id}`} passHref>
              <S.Card>
                <S.CardImage src={animal.photo} />
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
          ))
        ) : (
          <EmptyAnimals />
        )}
      </S.FlexWrapper>
    </Template>
  )
}

export default Animals
