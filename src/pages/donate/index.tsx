import { DonateImage } from 'public/donate'
import { useCallback, useEffect, useState } from 'react'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { Template } from 'src/components/template'
import { Description } from 'src/styles/animal'
import { Title } from 'src/styles/animals'
import * as S from '../../styles/donate'

const Donate: React.FC = () => {
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [validValue, setValidValue] = useState(true)
  const [isValidName, setIsValidName] = useState(true)

  const onChange = (targetValue: string) => {
    if (!!targetValue && Number(targetValue) < 1) {
      setValidValue(false)
    }

    setValue(targetValue)
  }

  const validateName = useCallback(() => {
    const [firstName, lastName = ''] = name?.split(' ') || []

    if (firstName?.length < 4 || lastName?.length < 4) {
      setIsValidName(!name)

      return !name
    }

    return true
  }, [name])

  useEffect(() => {
    validateName()
  }, [name, validateName])

  useEffect(() => {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const user = JSON.parse(userData)

      setName(user.name)
    }
  }, [])

  const onSubmit = useCallback(() => {
    if (!value || !name) {
      if (!name) setIsValidName(false)

      if (!value || Number(value) < 1) setValidValue(false)

      return
    }

    window.location.href = `/donate/qr/?value=${value}&name=${name}`
  }, [value, name])

  return (
    <Template
      showTitle={false}
      title="Doe"
      paths={[{ path: '/donate', label: 'Doe' }]}
    >
      <S.FlexWrapper>
        <div className="left">
          <Title>Doe</Title>
          <Description style={{ maxWidth: 603 }}>
            Contribua para o Projeto Jurema doando a partir de 1 real. Ao clicar
            em “Doar”, você será redirecionado para a página de pagamento.
          </Description>
          <Input
            label="Quanto você deseja doar?"
            placeholder="0,00"
            value={value}
            type="number"
            setValue={onChange}
            error={!validValue && 'Valor inválido'}
          />
          <Input
            error={!isValidName && 'Nome é obrigatório'}
            mask=""
            placeholder="João Silva"
            value={name}
            setValue={setName}
            label="Qual seu nome?"
          />
          <Button
            onClick={onSubmit}
            buttonText="Doar"
            width="155px"
            mobileWidth="133px"
          />
        </div>
        <DonateImage />
      </S.FlexWrapper>
    </Template>
  )
}

export default Donate
