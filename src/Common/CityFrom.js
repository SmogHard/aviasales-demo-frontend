import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Text = styled.span`
  line-height: 20px;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const Abbreviation = OpacityText.extend`
  position: absolute;
  right: 43px;
  top: 18px;
`;

const CityFrom = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }
`;

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 16px;
`;

export default function () {
  return (
    <CityFrom>
      <Input type="text" name="from" placeholder="Укажите город" defaultValue="Москва" />
      <Abbreviation>MOV</Abbreviation>
      <ButtonAction>
        <img alt="Направление" src={arrow} />
      </ButtonAction>
    </CityFrom>
  );
}
