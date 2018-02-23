import React from "react";
import styled from "styled-components";
import ButtonPassenger from "./../../Common/ButtonPassenger";
import DatePicker from "./../../Common/DatePicker";
import CityTo from "./../../Common/CityTo";
import CityFrom from "./../../Common/CityFrom";

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
    flex-basis: 23.3333%;
  }
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
      <DatePicker />
      <Layout>
        <ButtonPassenger />
      </Layout>
    </Inputs>
  );
}
