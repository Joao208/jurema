import { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'
import { AnimalsModel as AnimalsModels } from '../../../../models'

import * as S from 'src/styles/animal'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { FormIcon } from 'public/form'
import { Animal } from 'src/pages/animals'
import { formatAnimal } from 'src/utils/formatAnimal'
import { parseAnimal } from 'src/utils/parseAnimal'

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const animalId = ctx.params?.animal

  const { DataStore } = withSSRContext(ctx)

  const animal = await DataStore.query(AnimalsModels, animalId as string)

  if (!animal) {
    return {
      notFound: true,
    }
  }

  const formattedAnimal = await formatAnimal({
    animal: parseAnimal(animal),
    foundPhoto: false,
  })

  return {
    props: {
      animal: formattedAnimal,
    },
  }
}
