import styled from 'styled-components'
import { Shine } from './animals'

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 900px) {
      gap: 24px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 24px;

    svg {
      width: 327px;
      height: 290.21px;
    }
  }
`

export const Loading = styled.div`
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s ${Shine} linear infinite;

  cursor: default;

  width: 345px;
  height: 345px;
`

export const CopyContainer = styled.div`
  background: #f9f2ff;
  width: 100%;
  height: 40px;
  border-radius: 5px;

  padding: 9px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    display: none;
  }

  cursor: pointer;

  > p {
    font-family: 'Comfortaa', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;

    color: #3a3a3a;

    width: 90%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`
