import React from "react";
import styled from "styled-components";
import ButtonPassenger from "./../../Common/ButtonPassenger";
import DatePicker from "./../../Common/DatePicker";
import CityTo from "./../../Common/CityTo";
import CityFrom from "./../../Common/CityFrom";
import ButtonSearch from "./ButtonSearch";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const Departures = InputWrapper.extend`
  position: relative;
  @media (min-width: 768px) {
    border-bottom-left-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const Arrival = InputWrapper.extend`
  position: relative;
`;

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
    flex-basis: 16.666667%;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const DateFields = Layout.extend`
  display: flex;
  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
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

const DateSelect = styled.div`
  flex-basis: 50%;
`;

export default function() {
  return (
    <Inputs>
      <Layout>
        <CityFrom />
      </Layout>
      <Layout>
        <CityTo />
      </Layout>
      <DateFields>
        <DateSelect>
          <Departures>
            <DatePicker name="dtto" direction="Туда" />
          </Departures>
        </DateSelect>
        <DateSelect>
          <Arrival>
            <DatePicker name="dtfrom" direction="Обратно" />
          </Arrival>
        </DateSelect>
      </DateFields>
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
