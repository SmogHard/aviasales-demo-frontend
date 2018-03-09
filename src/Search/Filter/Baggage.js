import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Baggage = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const Checkboxes = styled.div`
  padding-top: 16px;
`;

const BaggageFilter = ({
  data, isAllChecked, handleCheck, handleClear, handleAllCheck,
}) => (
  <Baggage>
    <Filter
      title="Багаж"
      isVisibleClear={!isAllChecked(data)}
      onClearClick={() => handleClear('baggage')}
    >
      <Fragment>
        <Checkboxes>
          <Checkbox
            label="Все"
            check={isAllChecked(data)}
            onChange={() => handleAllCheck('baggage')}
          />
          {data.map((item, idx) => (
            <Checkbox
              check={item.checked}
              price={item.price}
              label={item.label}
              key={item.id}
              onChange={() => handleCheck('baggage', idx)}
            />
          ))}
        </Checkboxes>
      </Fragment>
    </Filter>
  </Baggage>
);

BaggageFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default BaggageFilter;
