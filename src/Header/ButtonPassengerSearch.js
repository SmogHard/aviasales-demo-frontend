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
  line-height: 20px
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
  flex-basis: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const SelectPassenger = InputWrapper.extend`
  flex-basis: 50%;

  @media (min-width: 992px) {
    flex-basis: 100%;
  }
`;

const ButtonSearch = styled.button`
  flex-basis: 50%;
  color: #ffffff;
  background: #ff9241;
  font-size: 20px;
  border: 0px;
  line-height: 23px;
  padding-top: 14px;
  padding-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 900;
  cursor: pointer;
  margin: 1px;

  &:hover,
  &:focus {
    background: #fca15f;
  }

  @media (min-width: 992px) {
    flex-basis: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  @media (min-width: 992px) {
    flex-wrap: wrap;
  }
`;

export default function() {
  return (
    <Wrapper>
      <SelectPassenger>
        <ButtonPassenger>
          <Text>
            1 пассажир, <OpacityText>эконом</OpacityText>
          </Text>
        </ButtonPassenger>
      </SelectPassenger>
      <ButtonSearch>Найти билеты</ButtonSearch>
    </Wrapper>
  );
}
