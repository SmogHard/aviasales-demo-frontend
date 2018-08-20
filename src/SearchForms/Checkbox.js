import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';
import checked from './checked.png';
import unchecked from './unchecked.png';

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
`;

const Text = styled.p`
  font-size: 12px;
  color: #4a4a4a;
`;

const CheckboxStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Check = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 0px;
  top: 9px;
  transition: all 0.3s;
  background-repeat: no-repeat;
  background-image: url(${unchecked});
  :after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Label = styled.label`
  display: flex;
  position: relative;
  padding-left: 28px;
  justify-content: space-between;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  & ${Check}:after {
    left: 0;
    top: 0;
  }

  & ${CheckboxStyled}:checked ~ ${Check}:after {
    display: block;
    background-repeat: no-repeat;
    background-image: url(${checked});
    width: 18px;
    height: 18px;
  }
`;

const Checkbox = ({
  price, label, check, onChange,
}) => (
  <Label>
    <Text>{label}</Text>
    {price && (
      <Price>
        <FormattedNumber
          value={price}
          style={String('currency')}
          currency="RUB"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </Price>
    )}
    <CheckboxStyled type="checkbox" checked={check} onChange={onChange} />
    <Check />
  </Label>
);

Checkbox.defaultProps = {
  price: undefined,
  label: undefined,
  check: false,
};

Checkbox.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number,
  check: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
