import { useCallback, useEffect, useState } from 'react'
import { GetStaticPropsContext } from 'next'
import * as S from 'src/styles/animal'

import { Input } from 'src/components/input'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { CheckBox } from 'src/components/checkbox'
import { getAnimals, sendAdoption } from 'src/services/api'
import { Animal } from 'src/pages/animals'

interface AnimalInterface {
  animal: Animal
}

const Adopt: React.FC<AnimalInterface> = ({ animal }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isValidName, setIsValidName] = useState(true)
  const [isValidPhone, setIsValidPhone] = useState(true)
  const [checked, setChecked] = useState(false)
  const [errorCheckbox, setErrorCheckbox] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const user = JSON.parse(userData)

      setName(user.name)
      setPhone(user.phone)
    }

    const [firstName, lastName = ''] = name.split(' ')

    if (firstName.length < 4 || lastName?.length < 4) {
      return setIsValidName(!name)
    }

    if (phone.length < 4) {
      return setIsValidPhone(!phone)
    }

    setIsValidName(true)
  }, [name, phone])

  const handleSubmit = useCallback(async () => {
    if (!isValidName || !isValidPhone) return

    if (!checked) return setErrorCheckbox(true)

    await sendAdoption({ name, phone, animalLink: animal?.animalLink })

    localStorage.setItem('userData', JSON.stringify({ name, phone }))

    localStorage.setItem(animal?.id.toString(), 'alreadyAdopted')

    window.location.href = `/animal/adopt/success/${animal?.id}`
  }, [isValidName, isValidPhone, name, phone, animal, checked])

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
        Para adotar o(a) {animal?.name}, preencha os campos abaixo e logo
        entraremos em contato com você para prosseguir com o processo de adoção
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
        mask="(99) 99999-9999"
        placeholder="(00) 00000-0000"
        value={phone}
        setValue={setPhone}
        label="Qual seu número de telefone?"
      />
      <CheckBox
        onChange={handleCheck}
        checked={checked}
        error={
          errorCheckbox &&
          'Você precisa aceitar receber mensagens pelo WhatsApp'
        }
      />
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
