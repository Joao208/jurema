import styled from 'styled-components'

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