import React from 'react';
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
  position: absolute;
  right: 10px;
  top: 14px;
`;

export default function () {
  return (
    <Wrapper>
      <Text>Сбросить все фильтры</Text>
      <Clear src={clear} alt="Сбросить фильтр" />
    </Wrapper>
  );
}
