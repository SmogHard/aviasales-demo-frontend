import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const data = {
  lowcost: { background: '#83d40b', text: 'Самый дешевый', emoji: '🤑' },
  faster: { background: '#af7542', text: 'Самый быстрый', emoji: '️⚡️' },
  best: { background: '#c279d1', text: 'Лучший билет', emoji: '😍' },
};

const Title = styled.span`
  font-size: 14px;
  line-heigth: 18px;
  font-weight: 900;
  color: white;
  padding: 8px;
  background: ${({ mark }) => data[mark].background};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = ({ type }) => (
  <Title mark={type}>
    {data[type].text} <span>{data[type].emoji}</span>
  </Title>
);

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
