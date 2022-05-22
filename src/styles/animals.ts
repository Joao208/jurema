import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 25px;

  padding: 0 117px;
  padding-bottom: 120px;

  @media (max-width: 800px) {
    padding: 0px 24px;
  }
`

export const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;

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

  @media (max-width: 900px) {
    gap: 15px;
  }
`

export const Card = styled.div`
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

  @media (max-width: 900px) {
    font-size: 18px;
  }
`

export const CardImage = styled.img`
  height: 68%;
  width: 100%;
  object-fit: cover;
`

export const Detail = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;

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
