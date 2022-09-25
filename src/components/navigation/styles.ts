import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 900px) {
    .desktop {
      display: none;
    }
  }

  @media (min-width: 900px) {
    .mobile {
      display: none !important;
    }
  }
`

export const ContainerDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: 'Comfortaa', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: #202020;

    margin: 0;
    padding-top: 2px;

    height: 20px;
  }

  .label {
    text-transform: capitalize;
  }

  p[class='redirect'] {
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    height: 20px;
  }

  span {
    display: flex;
    gap: 10px;
  }
`

export const ContainerMobile = styled.div`
  @media (min-width: 900px) {
    display: none;
  }

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    left: 0;
  }
`
