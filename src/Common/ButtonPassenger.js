import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const ButtonPassenger = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  line-height: 20px;
  align-items: center;
  position: relative;
  background: transparent;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

const Text = styled.span`
  line-height: 20px;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const SelectPassenger = InputWrapper.extend`
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 2px;
  }
`;
export default function() {
  return (
    <SelectPassenger>
      <ButtonPassenger>
        <Text>
          1 пассажир, <OpacityText>эконом</OpacityText>
        </Text>
      </ButtonPassenger>
    </SelectPassenger>
  );
}
