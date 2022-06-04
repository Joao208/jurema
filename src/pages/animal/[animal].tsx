import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { Detail } from 'src/styles/animals'
import * as S from 'src/styles/animal'
import { InterrogationIcon } from 'public/detailsIcons/interrogation'
import { BreedIcon } from 'public/detailsIcons/breed'
import { SizeIcon } from 'public/detailsIcons/size'
import { GenderIcon } from 'public/detailsIcons/gender'
import { VaccinesIcon } from 'public/detailsIcons/vaccines'
import { PlusIcon } from 'public/detailsIcons/plus'
import { SearchIcon } from 'public/detailsIcons/search'
import { BackgroundImage } from 'public/background'
import { Template } from 'src/components/template'
import { Button } from 'src/components/button'
import { useCallback, useEffect, useState } from 'react'
import { getAnimals } from 'src/services/api'
import { Animal } from '../animals'
import { SickIcon } from 'public/detailsIcons/sick'

interface AnimalInterface {
  animal: Animal
}

const AnimalPage: React.FC<AnimalInterface> = ({ animal }) => {
  const [alreadyAdopted, setAlreadyAdopted] = useState(false)
  const [image, setImage] = useState(animal?.photo)

  useEffect(() => {
    const animalInLocalStorage =
      localStorage.getItem(animal.id.toString()) || ''

    if (animalInLocalStorage === 'alreadyAdopted') {
      setAlreadyAdopted(true)
    }
  }, [animal])

  const handleErrorImage = useCallback(() => {
    setImage('/image404.png')
  }, [])

  const getSickInformation = (fiv: string, felv: string) => {
    if (fiv === 'Sim' && felv === 'Sim') return 'Possui FIV e FeLV'

    if (fiv === 'Sim') return 'Possui FIV'

    if (felv === 'Sim') return 'Possui FeLV'

    return 'Saudável'
  }

  return (
    <>
      <Head>
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={animal?.name}
        />
        <meta
          name="image"
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content={image}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={animal?.description}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image:width"
          content="1484"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image:height"
          content="1200"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <Template
        paths={[
          { path: '/animals', label: 'Adote um amigo' },
          { path: `/animal/${animal?.id}`, label: animal?.name },
        ]}
        title={animal?.name}
        showTitle={false}
        showHead={false}
      >
        <S.FlexWrapper>
          <S.LeftContainer>
            <S.Title>{animal?.name}</S.Title>
            <S.SubTitle>Como ele é?</S.SubTitle>
            <S.Description>{animal?.description}</S.Description>
            <S.SubTitle>Quais suas características?</S.SubTitle>
            <S.DetailsContainer>
              <div className="left">
                <Detail>
                  <InterrogationIcon />
                  <p>{animal?.species}</p>
                </Detail>
                <Detail>
                  <BreedIcon />
                  <p>{animal?.breed}</p>
                </Detail>
                <Detail>
                  <SizeIcon />
                  <p>{animal?.size}</p>
                </Detail>
                <Detail>
                  <GenderIcon />
                  <p>{animal?.sex}</p>
                </Detail>
              </div>

              <div className="right">
                <Detail>
                  <VaccinesIcon />
                  <p>Vacinado</p>
                </Detail>

                <Detail>
                  <PlusIcon />
                  <p>
                    {animal?.is_castrated === 'Sim'
                      ? 'Castrado'
                      : 'Não castrado'}
                  </p>
                </Detail>

                <Detail>
                  <SearchIcon />
                  <p>{animal?.personality}</p>
                </Detail>

                {(animal?.fiv !== 'Não aplicável' ||
                  animal?.felv !== 'Não aplicável') && (
                  <Detail>
                    <SickIcon />
                    <p>{getSickInformation(animal?.fiv, animal?.felv)}</p>
                  </Detail>
                )}
              </div>
            </S.DetailsContainer>
            {alreadyAdopted ? (
              <>
                <S.SubTitle>Pedido de adoção enviado</S.SubTitle>
                <S.Description>
                  Seu pedido de adoção foi enviado, agora é só aguardar que
                  daqui a pouco a gente entra em contato com você!
                </S.Description>
              </>
            ) : (
              <Button
                buttonText="Quero adotar ele(a)"
                href={`/animal/adopt/${animal?.id}`}
              />
            )}
          </S.LeftContainer>
          <S.ImageContainer>
            <S.Image
              placeholder="blur"
              onError={handleErrorImage}
              src={image}
            />
            <S.Background>
              <BackgroundImage />
            </S.Background>
          </S.ImageContainer>
        </S.FlexWrapper>
      </Template>
    </>
  )
}

export default AnimalPage

export async function getStaticPaths() {
  const { data: animalsResponse } = await getAnimals()

  const paths = animalsResponse.map((animal: Animal) => ({
    params: { animal: animal.id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const animalId = params?.animal

  const { data: animalsResponse } = await getAnimals()

  const animal = animalsResponse?.find?.(
    (animal: Animal) => animal.id.toString() === animalId
  )

  return {
    props: {
      animal,
    },
    revalidate: 1000,
  }
}
