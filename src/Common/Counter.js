import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import plus from './plus.svg';
import minus from './minus.svg';

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
    count: this.props.count,
  };

  deduct = (count) => {
    if (count === 0) {
      return 0;
    }
    this.props.onChange(-1);
    return count - 1;
  };

  add = (count, passenger) => {
    if (passenger === 9) {
      return count;
    }
    this.props.onChange(1);
    return count + 1;
  };
  deductCount = () => {
    this.setState(prevState => ({
      count: this.deduct(prevState.count),
    }));
  };

  addCount = () => {
    this.setState(prevState => ({
      count: this.add(prevState.count, this.props.passenger),
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

DropDown.defaultProps = {
  noSeat: undefined,
};
DropDown.propTypes = {
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  passenger: PropTypes.number.isRequired,
  noSeat: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
