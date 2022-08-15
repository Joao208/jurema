import React, { Dispatch, SetStateAction, useState } from 'react'
import * as S from './styles'

interface InputProps {
  label: string
  placeholder?: string
  value: string
  mask?: string
  setValue: Dispatch<SetStateAction<string>> | ((value: string) => void)
  error?: string | false
  type?: string
  id?: string
  onEnter?: (value: string) => unknown
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = 'Placeholder',
  value,
  setValue,
  mask = '',
  error = '',
  onEnter = () => {},
  ...props
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <S.Container>
      <S.Label focus={focus}>{label}</S.Label>
      <S.Input
        error={!!error}
        mask={mask}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            onEnter(e.target.value)
          }
        }}
        {...props}
      />
      {error && <p className="error">{error}</p>}
    </S.Container>
  )
}
