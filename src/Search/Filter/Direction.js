import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import air from './airplane.svg';

const Air = styled.img`
  margin: 0 8px;
`;

const Title = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: #323333;
  margin: 0;
  margin-top: 24px;
`;

const Direction = ({ cityFrom, cityTo }) => (
  <Title>
    {cityFrom}
    <Air src={air} alt="air" />
    {cityTo}
  </Title>
);

Direction.propTypes = {
  cityFrom: PropTypes.string.isRequired,
  cityTo: PropTypes.string.isRequired,
};

export default Direction;
