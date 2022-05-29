import Image from 'next/image'
import { CardAnimalInterface } from 'src/interfaces'
import styled, { css, keyframes } from 'styled-components'

const Shine = keyframes`
to {
    background-position-x: -200%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;

  padding: 0 117px;
  padding-bottom: 120px;

  @media (max-width: 800px) {
    padding: 0px 24px;
  }

  .hideOnMobile {
    @media (max-width: 900px) {
      display: none;
    }
  }
`

export const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;

  display: flex;
  align-items: center;

  color: #202020;

  margin: 0;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 

  height: auto;
  gap: 64px;
  padding: 10px 0;

  @media (max-width: 900px) {
    gap: 15px;
  }
`

export const Card = styled.div<CardAnimalInterface>`
  width: 334px;
  height: 494px;

  background: #f9f2ff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  @media (max-width: 900px) {
    width: 156px;
    height: 255px;
  }

  ${({ isLoading }) =>
    !isLoading &&
    css`
      :hover {
        background: #f3e4ff;
        box-shadow: 0px 4px 4px rgba(72, 0, 84, 0.25);
      }
    `}

  transition: all 0.2s ease-in-out;

  ${({ isLoading }) =>
    isLoading &&
    css`
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      background-size: 200% 100%;
      animation: 1.5s ${Shine} linear infinite;

      cursor: default;
    `}
`

export const CardTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;

  display: flex;
  align-items: center;

  color: #202020;
  margin: 8px 16px;

  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`

export const CardImage = styled(Image)`
  height: 68%;
  width: 100%;
  object-fit: cover;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  text-transform: capitalize;

  svg {
    width: 24px;
    margin-right: 10px;
  }

  p {
    font-family: 'Comfortaa', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 120%;

    color: #3a3a3a;

    margin: 0;

    @media (max-width: 900px) {
      font-size: 14px;

      padding-top: 6px;
    }
  }
`

export const DetailContainer = styled.div`
  margin: 0 16px;
`

export const HeaderContent = styled.div`
  padding: 0 117px;
  margin-bottom: 25px;

  @media (max-width: 800px) {
    padding: 0 24px;
  }
`
