import React from "react";
import styled from "styled-components";
import Flight from "./Flight";
import PriceAndInfo from "./PriceAndInfo";
import FlightXs from "./FlightXs";
import air_to from "./air-to.svg";
import air_from from "./air-from.svg";
import Header from "./Header";
import { data } from "./data";
import arrow from "./arrow-open.svg";

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

export default function(props) {
  return (
    <div>
      {data.map((result, i) => (
        <Ticket key={i}>
          <Header info={result.info} />
          <Wrapper>
            <PriceAndInfo info={result.info} />
            <Flight flight={result.flight} />
            <More>
              <img src={arrow} alt="Стрелка" />
            </More>
          </Wrapper>
          <Path>
            <FlightXs flight={result.flight.to} icon={air_to} />
            <FlightXs flight={result.flight.from} icon={air_from} />
          </Path>
        </Ticket>
      ))}
    </div>
  );
}
