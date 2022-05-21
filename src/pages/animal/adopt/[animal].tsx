import { GetStaticPropsContext } from 'next'
import { Container } from 'src/styles/animals'
import * as S from 'src/styles/animal'
import { Header } from 'src/components/header'
import { Navigation } from 'src/components/navigation'

import { Footer } from 'src/components/footer'
import { Input } from 'src/components/input'
import { Scroll } from 'src/styles'
import { useEffect, useState } from 'react'

interface Animal {
  id: string
  name: string
}

interface AnimalInterface {
  animal: Animal
}

const Adopt: React.FC<AnimalInterface> = ({ animal }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <Scroll>
      <Container>
        <Header />
        <Navigation paths={['Adote um amigo', animal.name, 'Quero adotar']} />
        <S.Title>Adotar {animal.name}</S.Title>
        <S.Description style={{ maxWidth: 603 }}>
          Para adotar o(a) Stallone, preencha os campos abaixo e logo entraremos
          em contato com você para prosseguir com o processo de adoção
        </S.Description>
        <Input
          placeholder="João Silva"
          value={name}
          setValue={setName}
          label="Qual seu nome?"
        />
        <Input
          mask="(99) 99999-999"
          placeholder="(00) 00000-0000"
          value={phone}
          setValue={setPhone}
          label="Qual seu número de telefone?"
        />
      </Container>
      <Footer />
    </Scroll>
  )
}

export default Adopt

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
