import styled from 'styled-components'

export const Container = styled.footer`
  position: static;
  z-index: 999;
  bottom: 0;

  width: 100vw;
  height: 419px;

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: 900px) {
    height: 359px;
  }
`
