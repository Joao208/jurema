import styled from 'styled-components'

export const Container = styled.footer`
  position: static;
  z-index: 999;
  bottom: 0;

  width: 100vw;
  height: 419px;

  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > hr {
    width: 80%;
    border-top: 1px solid #6e6e6e;

    @media (max-width: 900px) {
      width: 90%;
    }
  }

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: 900px) {
    height: 359px;
  }
`
