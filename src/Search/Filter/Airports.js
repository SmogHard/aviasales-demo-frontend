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

const Airports = ({
  airportsArrival,
  airportsDepart,
  isAllChecked,
  handleCheck,
  handleAllCheck,
}) => (
  <Airpots>
    <Filter title="Аэропорты" amount={12}>
      <Fragment>
        <Wrapper>
          <CheckboxTitle>Вылет из Москвы</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(airportsDepart)}
            onChange={() => handleAllCheck('airportsDepart')}
          />
          {airportsDepart.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('airportsDepart', idx)}
            />
          ))}
        </Wrapper>
        <Wrapper>
          <CheckboxTitle>Прибытие в Москву</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(airportsArrival)}
            onChange={() => handleAllCheck('airportsArrival')}
          />
          {airportsArrival.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('airportsArrival', idx)}
            />
          ))}
        </Wrapper>
      </Fragment>
    </Filter>
  </Airpots>
);

Airports.propTypes = {
  airportsArrival: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  airportsDepart: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default Airports;
