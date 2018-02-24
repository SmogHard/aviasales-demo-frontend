import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: 12px;
  margin: 0;
  color: #4a4a4a;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Check = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 0px;
  transition: all 0.3s;
  :after {
    content: "";
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
  :before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #cdd1da;
    box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const Label = styled.label`
  display: flex;
  position: relative;
  padding-left: 60px;
  align-items: center;
  justify-content:space-between;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  & ${Checkbox}:checked ~ ${Check}:after {
    left: 26px;
  }

  & ${Checkbox}:checked ~ ${Check}:before {
    background: #9FD468;
  }

`;

export default function(props) {
  return (
    <Label>
      <Text>{props.label}</Text>
      <Checkbox type="checkbox" />
      <Check />
    </Label>
  );
}
