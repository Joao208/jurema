import styled, { css, keyframes } from 'styled-components'
import { ButtonInterface } from './interface'

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Button = styled.div<ButtonInterface>`
  background: ${({ tokens }) => tokens.colors.purple[80].value};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ width = '341px', height = '71px' }) => css`
    width: ${width};
    height: ${height};
  `}

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;
  text-align: center;

  color: ${({ tokens }) => tokens.colors.white.value};

  cursor: pointer;

  transition: background 0.2s ease;

  :hover {
    background: ${({ tokens }) => tokens.colors.purple[100].value};
  }

  :active {
    outline: 4px solid rgba(89, 0, 103, 0.5);
    background: ${({ tokens }) => tokens.colors.purple[100].value};
  }

  @media (max-width: 900px) {
    ${({ mobileWidth = '250px', mobileHeight = '43px' }) => css`
      width: ${mobileWidth};
      height: ${mobileHeight};
    `}

    font-size: 15px;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      > svg {
        animation: ${rotate} 0.5s linear infinite;
      }

      cursor: not-allowed;

      background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
        #ffffff;

      :hover {
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1)
          ),
          #ffffff;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: #999999;
      cursor: not-allowed;

      :hover {
        background: #999999;
      }

      :active {
        background: #999999;
        outline: none;
      }
    `}
`
