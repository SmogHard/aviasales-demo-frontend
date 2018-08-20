import React from 'react';
import styled from 'styled-components';
import Flight from './Flight';
import PriceAndInfo from './PriceAndInfo';
import FlightXs from './FlightXs';
import airTo from './air-to.svg';
import airFrom from './air-from.svg';
import Header from './Header';
import { data } from './data';
import arrow from './arrow-open.svg';

const Ticket = styled.div`
  background: #ffffff;
  display: flex;
  border-radius: 4px;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Path = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
`;

const More = styled.button`
  display: none;
  border: 0;
  cursor: pointer;
  padding: 1px 4px;
  background: #edf5f7;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default function () {
  return (
    <div>
      {data.map(result => (
        <Ticket key={result.id}>
          {result.info.type && <Header type={result.info.type} />}
          <Wrapper>
            <PriceAndInfo info={result.info} />
            <Flight flight={result.flight} />
            <More>
              <img src={arrow} alt="Стрелка" />
            </More>
          </Wrapper>
          <Path>
            <FlightXs flight={result.flight.to} icon={airTo} />
            <FlightXs flight={result.flight.from} icon={airFrom} />
          </Path>
        </Ticket>
      ))}
    </div>
  );
}
