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

export const ImageContainer = styled.div`
  position: relative;

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 1250px) {
    > img {
      width: 350px;
      height: 350px;
    }

    svg {
      width: 350px;
      height: 350px;
    }
  }

  @media (max-width: 1020px) {
    > img {
      width: 250px;
      height: 250px;
    }

    svg {
      width: 250px;
      height: 250px;
    }
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

export const FlexWrapperSuccess = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;

    > div {
      margin-top: 25px;
    }

    .icon {
      svg {
        width: 327px;
        height: 226.58px;
      }
    }
  }
`
