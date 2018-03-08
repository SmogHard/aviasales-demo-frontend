import React from 'react';
import styled from 'styled-components';
import Range from './Range';
import Direction from './Direction';
import Title from './TitleFilter';
import arrow from './arrow-open.svg';

const Wrapper = styled.div`
  padding: 24px 16px 32px 16px;
  border-top: 1px solid #dddddd;
`;

const Flight = styled.div`
  margin-top: 40px;
`;

const Info = styled.div`
  padding-top: 16px;
`;

const Text = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
  margin-bottom: 4px;
`;

const Come = styled.p`
  line-height: 18px;
  font-size: 12px;
  margin: 0;
  color: #323333;
  margin-bottom: 4px;
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

export default () => (
  <Wrapper>
    <Title title="Время вылета и прибытия" arrow={arrow} />
    <Flight>
      <Direction cityFrom="Москва" cityTo="Барселона" />
      <Info>
        <Text>Вылет из Москвы:</Text>
        <Time>
          <From>c 00:05, 24 фев</From>
          <To>до 23:45, 24 фев</To>
        </Time>
        <Range />
      </Info>
      <Info>
        <Come>Прибытие в Барселону:</Come>
        <Time>
          <From>c 00:05, 24 фев</From>
          <To>до 23:45, 24 фев</To>
        </Time>
        <Range />
      </Info>
    </Flight>
    <Flight>
      <Direction cityFrom="Барселона" cityTo="Москва" />
      <Info>
        <Text>Вылет из Барселоны:</Text>
        <Time>
          <From>c 00:05, 24 фев</From>
          <To>до 23:45, 24 фев</To>
        </Time>
        <Range />
      </Info>
      <Info>
        <Come>Прибытие в Москву:</Come>
        <Time>
          <From>c 00:05, 24 фев</From>
          <To>до 23:45, 24 фев</To>
        </Time>
        <Range />
      </Info>
    </Flight>
  </Wrapper>
);
