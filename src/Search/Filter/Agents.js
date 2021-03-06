import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../SearchForms/Checkbox';

const Agents = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

const Checkboxes = styled.div`
  padding-top: 16px;
`;

const AgentsFilter = ({
  data, isAllChecked, handleCheck, handleClear, handleAllCheck,
}) => (
  <Agents>
    <Filter
      title="Агенства"
      isVisibleClear={!isAllChecked(data)}
      onClearClick={() => handleClear('agents')}
    >
      <Fragment>
        <Checkboxes>
          <Checkbox
            label="Все"
            check={isAllChecked(data)}
            onChange={() => handleAllCheck('agents')}
          />
          {data.map((agent, idx) => (
            <Checkbox
              check={agent.checked}
              price={agent.price}
              label={agent.label}
              key={agent.id}
              onChange={() => handleCheck('agents', idx)}
            />
          ))}
        </Checkboxes>
      </Fragment>
    </Filter>
  </Agents>
);

AgentsFilter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default AgentsFilter;
