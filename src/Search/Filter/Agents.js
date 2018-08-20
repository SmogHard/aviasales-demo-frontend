import React from 'react';
import styled from 'styled-components';
import arrowСlose from './arrow-close.svg';
import Title from './TitleFilter';

const Wrapper = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
`;

export default function () {
  return (
    <Wrapper>
      <Title title="Агенства" arrow={arrowСlose} amount="14" />
    </Wrapper>
  );
}
