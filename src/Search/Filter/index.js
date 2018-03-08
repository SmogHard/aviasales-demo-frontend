import React from 'react';
import styled from 'styled-components';
import Transfer from './Transfer';
import Flight from './Flight';
import Baggage from './Baggage';
import DurationOfTransfer from './DurationOfTransfer';
import Airports from './Airports';
import AirportOfTransfer from './AirportOfTransfer';
import Agents from './Agents';
import TravelTime from './TravelTime';
import Airlines from './Airlines';
import FilterOff from './FilterOff';

const Wrapper = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    background: #ffffff;
  }
`;

export default function () {
  return (
    <Wrapper>
      <Transfer />
      <Flight />
      <Baggage />
      <DurationOfTransfer />
      <TravelTime />
      <Airlines />
      <Airports />
      <AirportOfTransfer />
      <Agents />
      <FilterOff />
    </Wrapper>
  );
}
