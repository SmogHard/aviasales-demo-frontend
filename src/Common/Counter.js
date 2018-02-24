import React, { Component } from "react";
import styled from "styled-components";
import plus from "./plus.svg";
import minus from "./minus.svg";

const Counter = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
`;

const Minus = styled.div`
  display: flex;
  padding: 16px 8px;
  cursor: pointer;
`;

const Plus = styled.div`
  display: flex;
  padding: 0px 8px;
  cursor: pointer;
`;

const Operator = styled.img``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const Text = styled.span`
  padding-right: 24px;
  padding-left: 16px;
  font-size: 14px;

  @media (min-width: 1200px) {
    padding-right: 42px;
  }
`;

const Count = styled.p`
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  margin: 0px;
  padding: 8px;
`;

export default class DropDown extends Component {
  state = {
    count: this.props.count ? this.props.count : 0
  };

  deductCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <Wrapper>
        <Text> Взрослые </Text>
        <Counter>
          <Minus onClick={this.deductCount}>
            <Operator src={minus} />
          </Minus>
          <Count>{this.state.count} </Count>
          <Plus onClick={this.addCount}>
            <Operator src={plus} />
          </Plus>
        </Counter>
      </Wrapper>
    );
  }
}
