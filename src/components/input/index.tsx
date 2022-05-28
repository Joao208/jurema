import React, { useState } from 'react'
import * as S from './styles'

interface InputProps {
  label: string
  placeholder?: string
  value: string
  mask?: string
  setValue: (param: string) => any
  error?: string | false
  type?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = 'Placeholder',
  value,
  setValue,
  mask = '',
  error = '',
  type,
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <S.Container>
      <S.Label focus={focus}>{label}</S.Label>
      <S.Input
        type={type}
        error={!!error}
        mask={mask}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </S.Container>
  )
}
