import styled, { css } from 'styled-components'
import { InputInterface, LabelInterface } from './interface'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  .error {
    font-family: 'Comfortaa', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;

    color: #de0000;

    margin: 0;
    margin-top: 4px;

    @media (max-width: 900px) {
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`

export const Label = styled.p<LabelInterface>`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;

  display: flex;
  align-items: center;
  font-size: 24px;

  color: #202020;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  ${({ focus }) =>
    focus &&
    css`
      color: #9100a9;
    `}
`

export const Input = styled(InputMask)<InputInterface>`
  ${({ error }) => css`
    border: 1px solid ${error ? '#DE0000' : '#999999'};
  `}

  border-radius: 10px;

  height: 61px;
  width: 444px;

  padding: 16px;
  font-size: 24px;

  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 500;

  display: flex;
  align-items: center;

  color: #202020;

  @media (max-width: 900px) {
    font-size: 14px;

    width: 327px;
    height: 49px;
  }

  :focus {
    border: 1px solid #9100a9;
    outline: none;
  }

  ::placeholder {
    color: #999999;
  }
`
