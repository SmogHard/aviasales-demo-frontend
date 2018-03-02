import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { withClickOutside } from "react-clickoutside";
import Checkbox from "./Checkbox";

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
  position: relative;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 2px;
  }
`;

const Options = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 57px;
  left: 0;
  background: #ffffff;
  box-shadow: -2px 1px 2px rgba(74, 74, 74, 0.2),
    0px 1px 4px rgba(74, 74, 74, 0.2);
`;

const Bussines = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #dddddd;
`;

const SelectPassOutside = withClickOutside()(SelectPassenger);

const category = { label: "Бизнес класс" };

export default class DropDown extends Component {
  state = {
    isOpen: false
  };

  onToogle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  onClickOutside = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <SelectPassOutside onClickOutside={this.onClickOutside}>
        <ButtonPassenger type="button" onClick={this.onToogle}>
          <Text>
            1 пассажир, <OpacityText>эконом</OpacityText>
          </Text>
        </ButtonPassenger>
        {this.state.isOpen && (
          <Options>
            <Counter text="Взрослые" count={1} />
            <Counter text="Дети до 12 лет" count={1} />
            <Counter text="Дети до 2 лет" count={0} noSeat={true} />
            <Bussines>
              <Checkbox data={category} />
            </Bussines>
          </Options>
        )}
      </SelectPassOutside>
    );
  }
}
