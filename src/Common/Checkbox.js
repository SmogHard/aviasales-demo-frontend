import React from "react";
import styled from "styled-components";
import checked from "./checked.png";
import unchecked from "./unchecked.png";

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
`;

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
  background-repeat: no-repeat;
  background-image: url(${unchecked});
  :after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: flex;
  position: relative;
  padding-left: 28px;
  align-items: center;
  justify-content:space-between;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  & ${Check}:after {
    left:0;
    top: 0;
  }

  & ${Checkbox}:checked ~ ${Check}:after {
    display:block;
    background-repeat: no-repeat;
    background-image: url(${checked});
    width: 18px;
    height: 18px;
  }
`;

export default function(props) {
  return (
    <Label>
      <Text>{props.data.label}</Text>
      <Price> {props.data.price}</Price>
      <Checkbox type="checkbox" />
      <Check />
    </Label>
  );
}
