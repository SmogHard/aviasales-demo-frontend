import React from 'react';
import styled from 'styled-components';
import ButtonPassenger from './../../Common/ButtonPassenger';
import DatePicker from './../../Common/DatePicker';
import ChoiseCity from './../../Common/ChoiseCity';

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 48px;
  }
`;

const Layout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 20.6666%;
  }
`;

const Cities = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 1200px) {
    flex-basis: 41%;
  }
`;

const DateLayout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 38%;
  }
`;

export default function () {
  return (
    <Inputs>
      <Cities>
        <ChoiseCity />
      </Cities>
      <DateLayout>
        <DatePicker />
      </DateLayout>
      <Layout>
        <ButtonPassenger />
      </Layout>
    </Inputs>
  );
}
