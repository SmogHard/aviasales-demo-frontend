import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.p`
  position: relative;
  display: flex;
  font-size: 12px;
  margin: 0px;
  text-transform: uppercase;
  align-items: center;
  font-weight: 500;
  color: #5b5b5c;
`;

const Arrow = styled.img`
  margin-right: 6px;
`;

const Amount = styled.span`
  color: #a0b0b9;
  padding-left: 8px;
`;

const TitleFilter = ({ arrow, title, amount }) => (
  <Title>
    <Arrow src={arrow} />
    {title}
    {amount && <Amount> {amount} </Amount>}
  </Title>
);

TitleFilter.defaultProps = {
  amount: undefined,
};

TitleFilter.propTypes = {
  arrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string,
};

export default TitleFilter;
