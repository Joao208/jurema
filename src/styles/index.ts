import Image from 'next/image'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { HeaderContentInterface, WrapperInterface } from './interfaces'

export const Scroll = styled.div.attrs({
  id: 'scroll-container',
})`
  height: 100vh;

  -webkit-overflow-y: scroll;
  overflow-y: scroll;

  scroll-behavior: smooth;
`

export const HeaderContent = styled.div<HeaderContentInterface>`
  padding: 0 117px;

  ${({ margin }) =>
    margin &&
    css`
      margin-bottom: 25px;
    `}

  @media (max-width: 800px) {
    padding: 0 24px;
  }
`

export const ImageHeader = styled.div`
  width: 100%;
  height: 537px;

  @media (max-width: 800px) {
    display: none;
  }

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    z-index: 999;
  }

  div {
    z-index: 999;
  }
`

export const CustomImage = styled(Image)`
  position: absolute;
`

export const FilterImage = styled.div`
  background: linear-gradient(
    0deg,
    rgba(76, 0, 103, 0.6),
    rgba(76, 0, 103, 0.6)
  );

  position: absolute;

  width: 100%;
  height: 100%;

  z-index: 998 !important;
`

export const Title = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 96px;

  text-align: center;

  color: #ffffff;
  margin: 10px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`

export const Description = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  margin: 10px 0;

  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`

export const Button = styled.div`
  width: 244px;
  height: 71px;

  background: #9100a9;
  border-radius: 10px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 20px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Reverse = css`
  flex-direction: row-reverse;
`

const Normal = css`
  flex-direction: row;
`

const types = {
  normal: Normal,
  reverse: Reverse,
} as { [key: string]: FlattenSimpleInterpolation }

export const Wrapper = styled.div<WrapperInterface>`
  ${({ type = 'normal' }) => types[type]}

  width: 100%;

  ${({ height = '535.9px' }) => css`
    height: ${height};
  `}

  display: flex;

  > svg {
    width: 50%;
    max-height: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: auto;

    > svg {
      width: 100%;
      height: 335px;
    }
  }
`

const paddingLeft = css`
  padding-left: 117px;
`

const paddingRight = css`
  padding-right: 117px;
`

const typesPadding = {
  normal: paddingLeft,
  reverse: paddingRight,
} as { [key: string]: FlattenSimpleInterpolation }

export const Content = styled.div<WrapperInterface>`
  ${({ type = 'normal' }) => typesPadding[type]}

  width: 50%;
  padding-top: 30px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;

    flex-direction: column;
    align-items: center;

    padding: 24px;
  }
`

export const TitleContent = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;

  color: #202020;

  margin: 24px 0;

  @media (max-width: 900px) {
    font-size: 24px;
    margin: 0;

    line-height: auto;
    margin-bottom: 8px;
  }
`

export const DescriptionContent = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 120%;

  color: #3a3a3a;

  margin-bottom: 32px;
  margin-top: 0;

  @media (max-width: 900px) {
    font-size: 14px;
    text-align: center;

    margin-bottom: 16px;
  }
`

export const WrapperContent = styled.div`
  display: flex;

  gap: 100px;
  width: 100%;

  justify-content: center;
  align-items: center;
`

export const NumberToCall = styled.a`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 55px;

  margin: 0;

  background: linear-gradient(90deg, #9100a9 0%, #590067 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

export const NumberToCallContainer = styled.div`
  border-bottom: 1px solid #202020;

  display: flex;

  align-items: center;
  flex-direction: column;
`

export const NumberToCallText = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  margin: 0 10px 10px 10px;

  color: #202020;
`
