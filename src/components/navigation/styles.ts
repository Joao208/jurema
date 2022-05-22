import styled from 'styled-components'

export const Container = styled.div`
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

  p[class='redirect'] {
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    height: 20px;
  }
`
