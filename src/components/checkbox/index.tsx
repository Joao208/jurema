import React from 'react'
import * as S from './styles'

interface CheckBox {
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string | false
}

export const CheckBox: React.FC<CheckBox> = ({
  checked,
  onChange = () => {},
  error,
}) => {
  return (
    <S.ContainerCheckBox>
      <label className="container">
        Aceito receber mensagens através do meu WhatsApp.
        <input
          className="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          checked={checked}
        />
        <span className="checkMark"></span>
      </label>
      {error && <p className="error">{error}</p>}
    </S.ContainerCheckBox>
  )
}
