import styled from 'styled-components'

export const ContainerCheckBox = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 45px;
    cursor: pointer;

    font-family: 'Comfortaa', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 120%;

    display: flex;
    align-items: center;

    width: 603px;

    color: #3a3a3a;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkMark {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 5px;

    border: 1px solid #999999;
  }

  .container input:checked ~ .checkMark {
    background: #9100a9;
    border: none;
  }

  .container .checkMark:after {
    content: '';
    position: absolute;
    display: none;

    left: 11px;
    top: 5px;

    width: 5px;
    height: 14px;
    border: solid white;

    border-radius: 1px;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .container input:checked ~ .checkMark:after {
    display: block;
  }
`
