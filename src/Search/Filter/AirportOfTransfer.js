import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const Wrapper = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

export default function () {
  return (
    <Wrapper>
      <Filter title="Аэропорт пересадки" amount={45} />
    </Wrapper>
  );
}
