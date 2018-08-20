import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import clear from './clear.svg';

const Wrapper = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
  position: relative;
`;

const Text = styled.p`
  margin: 0px;
  color: #00bde4;
  font-size: 12px;
  text-transform: uppercase;
`;

const Clear = styled.img`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 14px;
`;
const FilterOff = ({ handleClearAll }) => (
  <Wrapper>
    <Text>Сбросить все фильтры</Text>
    <Clear src={clear} alt="Сбросить фильтр" onClick={() => handleClearAll()} />
  </Wrapper>
);

FilterOff.propTypes = {
  handleClearAll: PropTypes.func.isRequired,
};
export default FilterOff;
