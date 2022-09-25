import { GetServerSideProps } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AnimalsModel as AnimalsModels } from 'src/models'
import { withSSRContext } from 'aws-amplify'

import * as S from 'src/styles/animal'
import { Input } from 'src/components/input'
import { Button } from 'src/components/button'
import { Template } from 'src/components/template'
import { CheckBox } from 'src/components/checkbox'
import { sendAdoption } from 'src/services/api'
import { Animal } from 'src/pages/animals'
import { formatAnimal } from 'src/utils/formatAnimal'
import { parseAnimal } from 'src/utils/parseAnimal'

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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const user = JSON.parse(userData)

      setName(user.name)
      setPhone(user.phone)
    }
  }, [])

  const validateName = useCallback(() => {
    const [firstName, lastName = ''] = name?.split(' ') || []

    if (firstName?.length < 4 || lastName?.length < 4) {
      setIsValidName(!name)

      return !name
    }

    return true
  }, [name])

  const validatePhone = useCallback(() => {
    if (phone.length < 4) {
      setIsValidPhone(!phone)

      return !phone
    }

    setIsValidName(true)

    return true
  }, [phone])

  useEffect(() => {
    validateName()
    validatePhone()
  }, [name, phone, validatePhone, validateName])

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      if (!isValidName || !isValidPhone) return

      if (!name || !checked || !phone) {
        if (!checked) setErrorCheckbox(true)

        if (!name) setIsValidName(false)

        if (!phone) setIsValidPhone(false)

        return
      }

      await sendAdoption({
        name,
        phone,
        animalLink: `https://projetojurema.org/animal/${animal?.id}`,
      })

      localStorage.setItem('userData', JSON.stringify({ name, phone }))

      localStorage.setItem(animal?.id, 'alreadyAdopted')

      window.location.href = `/animal/adopt/success/${animal?.id}`
    } catch (error) {
      const message = 'Parece que algo deu errado, tente novamente mais tarde'

      return toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }, [isValidName, isValidPhone, name, phone, animal, checked])

  const handleCheck = useCallback((e: boolean) => {
    setChecked(e)
  }, [])

  const handleNext = () => {
    const activeId = document.activeElement?.id || ''

    const inputs = {
      'name-input': 'phone-input',
    } as { [key: string]: string }

    const validators = {
      'name-input': validateName,
      'phone-input': validateName,
    } as { [key: string]: Function }

    const setters = {
      'name-input': setIsValidName,
      'phone-input': setIsValidPhone,
    } as { [key: string]: Function }

    const isValid = validators[activeId]?.()

    if (!isValid) return setters[activeId]?.(isValid)

    if (!inputs[activeId]) return handleSubmit()

    const input = document.getElementById(inputs[activeId])

    if (input) {
      input.focus()
    }
  }

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
        id="name-input"
        error={!isValidName ? 'Nome é obrigatório' : ''}
        mask=""
        placeholder="João Silva"
        onEnter={handleNext}
        value={name}
        setValue={setName}
        label="Qual seu nome?"
      />
      <Input
        id="phone-input"
        mask="(99) 99999-9999"
        placeholder="(00) 00000-0000"
        onEnter={handleNext}
        value={phone}
        setValue={setPhone}
        label="Qual seu número de telefone?"
      />
      <CheckBox
        onChange={handleCheck}
        checked={checked}
        error={
          errorCheckbox
            ? 'Você precisa aceitar receber mensagens pelo WhatsApp'
            : ''
        }
      />
      <Button
        mobileWidth="175px"
        onClick={handleSubmit}
        width="222px"
        isLoading={isLoading}
        buttonText="Confirmar"
      />
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
