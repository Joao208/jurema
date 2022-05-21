import styled from 'styled-components'

export const FlexWrapper = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
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

export const SubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;

  display: flex;
  align-items: center;

  color: #3a3a3a;
  margin: 0;

  @media (max-width: 900px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;

  margin: 0;
  color: #3a3a3a;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;

  max-width: 450px;
  justify-content: space-between;

  flex-wrap: wrap;

  gap: 20px;
`

export const Button = styled.div`
  background: #9100a9;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 341px;
  height: 71px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  cursor: pointer;

  @media (max-width: 900px) {
    width: 250px;
    height: 43px;

    font-size: 15px;
  }
`

export const ImageContainer = styled.div`
  position: relative;

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 465px;
  height: 459.43px;

  object-fit: cover;
  border-radius: 13px;

  @media (max-width: 900px) {
    width: 100%;

    height: 323px;
    border-radius: 9px;
  }

  @media (min-width: 900px) {
    position: absolute;
    z-index: 9;
    top: 40px;
    right: 40px;
  }
`

export const Background = styled.div`
  position: absolute;

  right: 0;
  top: 0;

  @media (max-width: 900px) {
    display: none;
  }
`
