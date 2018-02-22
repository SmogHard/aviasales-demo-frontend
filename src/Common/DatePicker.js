import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";

const Img = styled.img``;

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

export default function(props) {
  return (
    <div>
      <Input
        date
        type="text"
        name={props.name}
        placeholder={props.direction}
        defaultValue=""
      />
      <ButtonAction>
        <Img alt="Календарь" src={calendar} />
      </ButtonAction>
    </div>
  );
}
