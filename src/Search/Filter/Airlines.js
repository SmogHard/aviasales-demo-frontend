import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from './Filter';
import Checkbox from './../../Common/Checkbox';

const Airlines = styled.div`
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

const Information = styled.p`
  font-size: 12px;
`;

const AirlinesFilter = ({
  airlines,
  alliance,
  several,
  isAllChecked,
  handleCheck,
  handleAllCheck,
  handleClear,
}) => (
  <Airlines>
    <Filter
      title="Авиакомпании"
      isOpen
      amount={42}
      isVisibleClear={!isAllChecked(alliance) || !isAllChecked(airlines)}
      onClearClick={() => handleClear('alliance', 'airlines')}
    >
      <Fragment>
        <Wrapper>
          <Checkbox
            label="Несколько авиакомпаний"
            check={isAllChecked(several)}
            onChange={() => handleAllCheck('several')}
          />
        </Wrapper>
        <Information>
          Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
        </Information>
        <Wrapper>
          <CheckboxTitle>Альянсы</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(alliance)}
            onChange={() => handleAllCheck('alliance')}
          />
          {alliance.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('alliance', idx)}
            />
          ))}
        </Wrapper>
        <Wrapper>
          <CheckboxTitle>Авиакомпании</CheckboxTitle>
          <Checkbox
            label="Все"
            check={isAllChecked(airlines)}
            onChange={() => handleAllCheck('airlines')}
          />
          {airlines.map((checkbox, idx) => (
            <Checkbox
              check={checkbox.checked}
              price={checkbox.price}
              label={checkbox.label}
              key={checkbox.id}
              onChange={() => handleCheck('airlines', idx)}
            />
          ))}
        </Wrapper>
      </Fragment>
    </Filter>
  </Airlines>
);

AirlinesFilter.propTypes = {
  airlines: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  alliance: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  several: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  isAllChecked: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleAllCheck: PropTypes.func.isRequired,
};

export default AirlinesFilter;
