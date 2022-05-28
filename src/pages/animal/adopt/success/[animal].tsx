import { GetStaticPropsContext } from 'next'
import * as S from 'src/styles/animal'

import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { FormIcon } from 'public/form'
import { getAnimals } from 'src/services/api'
import { Animal } from 'src/pages/animals'

interface AnimalInterface {
  animal: Animal
}

const Adopt: React.FC<AnimalInterface> = ({ animal }) => {
  return (
    <Template
      paths={[
        { path: '/animals', label: 'Adote um amigo' },
        { path: `/animal/${animal?.id}`, label: animal?.name },
        { path: '', label: 'Quero adotar' },
      ]}
    >
      <S.FlexWrapperSuccess>
        <div>
          <S.Title>Pedido de adoção enviado!</S.Title>

          <S.Description style={{ maxWidth: 603 }}>
            Agora é só aguardar que daqui a pouco a gente entra em contato com
            você! Espero que tenha um bom dia!
          </S.Description>

          <Button
            href="/"
            mobileWidth="241px"
            width="328px"
            buttonText="Voltar para o início"
          />
        </div>

        <FormIcon />
      </S.FlexWrapperSuccess>
    </Template>
  )
}

export default Adopt

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
