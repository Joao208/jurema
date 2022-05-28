import styled, { css } from 'styled-components'
import {
  ContainerInterface,
  HamburgerContainerInterface,
  MenuInterface,
} from './interface'

export const Container = styled.div<ContainerInterface>`
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 96px;

  ${({ showBorder }) =>
    showBorder &&
    css`
      border-bottom: 1px solid #999999;
    `}

  background: #fff;

  @media (max-width: 800px) {
    height: 98px;
  }
`

export const LeftContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`

export const LogoContainer = styled.div`
  cursor: pointer;
`

export const Text = styled.div`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  text-align: right;
  cursor: pointer;

  color: #202020;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`

export const Button = styled.div`
  width: 158px;
  height: 52px;

  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #9100a9;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HamburgerContainer = styled.div<HamburgerContainerInterface>`
  width: 35px;
  height: 30px;

  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;

    width: 35px;
    height: 0px;
    border: 1.5px solid #9100a9;

    background: #9100a9;
    border-radius: 9px;

    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 10px;
  }

  span:nth-child(3) {
    top: 20px;
  }

  ${({ opened }) =>
    opened &&
    css`
      span:nth-child(1) {
        transform: rotate(-45deg);

        top: 50%;
      }

      span:nth-child(2) {
        transform: rotate(-45deg);

        top: 50%;
      }

      span:nth-child(3) {
        transform: rotate(45deg);

        top: 50%;
      }
    `}

  @media (min-width: 800px) {
    display: none;
  }
`

export const Menu = styled.div<MenuInterface>`
  height: 0;
  width: 100vw;
  transition: 0.8s ease;

  padding: 0 20px;

  position: fixed;
  background: #fff;

  overflow-y: scroll;
  z-index: 10;

  ${({ opened, height }) =>
    opened &&
    css`
      height: ${height}px;
    `}

  @media (min-width: 800px) {
    display: none;
  }
`

export const TitleMenu = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  color: #202020;
`

export const Option = styled.p`
  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;

  cursor: pointer;

  color: #202020;
`
