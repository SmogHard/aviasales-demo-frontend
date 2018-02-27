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

const Passenger = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const Text = styled.span`
  padding-right: 12px;
  padding-left: 16px;
  font-size: 14px;
`;

const Count = styled.p`
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  margin: 0px;
  padding: 8px;
`;

const WithoutSeat = styled.p`
  color: #a0b0b9;
  font-size: 12px;
  margin: 0;
`;

export default class DropDown extends Component {
  state = {
    count: this.props.count ? this.props.count : 0
  };

  deductCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  addCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <Passenger>
        <Text>
          {this.props.text}
          {this.props.noSeat && <WithoutSeat>Без места</WithoutSeat>}
        </Text>
        <Counter>
          <Minus onClick={this.deductCount}>
            <Operator src={minus} />
          </Minus>
          <Count>{this.state.count} </Count>
          <Plus onClick={this.addCount}>
            <Operator src={plus} />
          </Plus>
        </Counter>
      </Passenger>
    );
  }
}
