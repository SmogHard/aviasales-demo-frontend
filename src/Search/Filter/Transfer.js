import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Transfer = styled.div`
  padding: 16px 16px;
`;

const Checkboxes = styled.div`
  padding-top: 16px;
`;

const TransferFilter = ({
  data, isAllChecked, handleCheck, handleClear, handleAllCheck,
}) => (
  <Transfer>
    <Filter
      title="Пересадки"
      isOpen
      isVisibleClear={!isAllChecked(data)}
      onClearClick={() => handleClear('transfer')}
    >
      <Fragment>
        <Checkboxes>
          <Checkbox
            label="Все"
            check={isAllChecked(data)}
            onChange={() => handleAllCheck('transfer')}
          />
          {data.map((item, idx) => (
            <Checkbox
              check={item.checked}
              price={item.price}
              label={item.label}
              key={item.id}
              onChange={() => handleCheck('transfer', idx)}
            />
          ))}
        </Checkboxes>
      </Fragment>
    </Filter>
  </Transfer>
);

TransferFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default TransferFilter;
