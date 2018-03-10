import React from 'react';
import styled from 'styled-components';
import ButtonPassenger from './../../Common/ButtonPassenger';
import DatePicker from './../../Common/DatePicker';
import DepartAndArrival from './../../Common/DepartAndArrival';
import ButtonSearch from './../../Common/ButtonSearch';

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
    flex-basis: 100%;
  }
  @media (min-width: 1200px) {
    flex-basis: 33.33333%;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-basis: 45%;
`;

const ButtonWrapPass = styled.div`
  flex-basis: 55%;
  margin-right: 1px;
  @media (min-width: 1200px) {
    margin-right: 20px;
  }
`;

const DateLayout = styled.div`
  flex-basis: 50%;
  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

export default function () {
  return (
    <Inputs>
      <Layout>
        <DepartAndArrival />
      </Layout>
      <DateLayout>
        <DatePicker />
      </DateLayout>
      <Wrapper>
        <ButtonWrapPass>
          <ButtonPassenger />
        </ButtonWrapPass>
        <ButtonWrap>
          <ButtonSearch />
        </ButtonWrap>
      </Wrapper>
    </Inputs>
  );
}
