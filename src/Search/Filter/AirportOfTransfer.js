import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Airpots = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const CheckboxTitle = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  padding-top: 16px;
`;

const AirportsOfTransfer = ({
  airportsTransferArrival,
  airportsTransferDepart,
  isAllChecked,
  handleCheck,
  handleAllCheck,
  handleClear,
}) => (
  <Airpots>
    <Filter
      title="Аэропорт пересадки"
      amount={42}
      isVisibleClear={
        !isAllChecked(airportsTransferDepart) || !isAllChecked(airportsTransferArrival)
      }
      onClearClick={() => handleClear('airportsTransferDepart', 'airportsTransferArrival')}
    >
      <Fragment>
        <Wrapper>
          <CheckboxTitle>Вылет из Москвы</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(airportsTransferDepart)}
            onChange={() => handleAllCheck('airportsTransferDepart')}
          />
          {airportsTransferDepart.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('airportsTransferDepart', idx)}
            />
          ))}
        </Wrapper>
        <Wrapper>
          <CheckboxTitle>Прибытие в Москву</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(airportsTransferArrival)}
            onChange={() => handleAllCheck('airportsTransferArrival')}
          />
          {airportsTransferArrival.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('airportsTransferArrival', idx)}
            />
          ))}
        </Wrapper>
      </Fragment>
    </Filter>
  </Airpots>
);

AirportsOfTransfer.propTypes = {
  airportsTransferArrival: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  airportsTransferDepart: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default AirportsOfTransfer;
