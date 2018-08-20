import React from 'react';
import styled from 'styled-components';
import Range from './Range';
import Direction from './Direction';
import Title from './TitleFilter';
import arrowOpen from './arrow-open.svg';

const Wrapper = styled.div`
  padding: 24px 16px 32px 16px;
  border-top: 1px solid #dddddd;
`;

const Flight = styled.div``;

const Info = styled.div`
  padding-top: 16px;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const From = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
`;
const To = styled.p`
  line-height: 18px;
  font-size: 12px;
  color: #323333;
  margin: 0;
`;

export default function () {
  return (
    <Wrapper>
      <Title title="Время в пути" arrow={arrowOpen} />
      <Flight>
        <Direction cityFrom="Москва" cityTo="Барселона" />
        <Info>
          <Time>
            <From>от 04ч 20м</From>
            <To>до 24ч 11м</To>
          </Time>
          <Range />
        </Info>
      </Flight>
      <Flight>
        <Direction cityFrom="Барселона" cityTo="Москва" />
        <Info>
          <Time>
            <From>от 04ч 10м</From>
            <To>до 14ч 11м</To>
          </Time>
          <Range />
        </Info>
      </Flight>
    </Wrapper>
  );
}
