import React from 'react';
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

const Minus = styled.button`
  display: flex;
  padding: 16px 8px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
`;

const Plus = styled.button`
  display: flex;
  padding: 12px 8px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
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

const DropDown = ({
  counter, text, count, passenger, noSeat, onChange,
}) => (
  <Passenger>
    <Text>
      {text}
      {noSeat && <WithoutSeat>Без места</WithoutSeat>}
    </Text>
    <Counter>
      <Minus onClick={() => onChange(-1, counter)} disabled={count === 0}>
        <Operator src={minus} />
      </Minus>
      <Count>{String(count)}</Count>
      <Plus onClick={() => onChange(1, counter)} disabled={passenger === 9}>
        <Operator src={plus} />
      </Plus>
    </Counter>
  </Passenger>
);

DropDown.defaultProps = {
  noSeat: undefined,
};

DropDown.propTypes = {
  counter: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  passenger: PropTypes.number.isRequired,
  noSeat: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DropDown;
