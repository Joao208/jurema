import { useCallback, useEffect, useState } from 'react'
import { GetStaticPropsContext } from 'next'
import * as S from 'src/styles/animal'

import { Input } from 'src/components/input'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { CheckBox } from 'src/components/checkbox'

interface Animal {
  id: string
  name: string
}

interface AnimalInterface {
  animal: Animal
}

//TODO tamanho 1155px da erro

const Adopt: React.FC<AnimalInterface> = ({ animal }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isValidName, setIsValidName] = useState(true)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const [firstName, lastName = ''] = name.split(' ')

    if (firstName.length < 4 || lastName?.length < 4) {
      return setIsValidName(!name)
    }

    setIsValidName(true)
  }, [name, phone])

  const handleSubmit = useCallback(() => {}, [])

  const handleCheck = useCallback((e: boolean) => {
    setChecked(e)
  }, [])

  return (
    <Template
      paths={[
        { path: '/animals', label: 'Adote um amigo' },
        { path: `/animal/${animal?.id}`, label: animal?.name },
        { path: '', label: 'Quero adotar' },
      ]}
      title={`Adotar ${animal?.name}`}
    >
      <S.Description style={{ maxWidth: 603 }}>
        Para adotar o(a) Stallone, preencha os campos abaixo e logo entraremos
        em contato com você para prosseguir com o processo de adoção
      </S.Description>
      <Input
        error={!isValidName && 'Nome é obrigatório'}
        mask=""
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
      <CheckBox onChange={handleCheck} checked={checked} />
      <Button
        mobileWidth="175px"
        onClick={handleSubmit}
        width="222px"
        buttonText="Confirmar"
      />
    </Template>
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
