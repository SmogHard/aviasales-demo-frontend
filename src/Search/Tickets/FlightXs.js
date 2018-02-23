import React from "react";
import styled from "styled-components";
import clock from "./clock.svg";

const Flight = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 6px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  padding-right: 8px;
`;

const Transfers = styled.div`
  text-align: right;
  flex-basis: 20%;
`;

const Total = styled.div`
  flex-basis: 30%;
`;

const Time = styled.div`
  flex-basis: 50%;
`;

export default function(props) {
  const { flight, icon } = props;
  return (
    <Flight>
      <Time>
        <Icon src={icon} />
        {flight.takeoff} - {flight.landing}{" "}
      </Time>
      <Total>
        <Icon src={clock} />
        {flight.total}
      </Total>
      <Transfers>{flight.transfers}</Transfers>
    </Flight>
  );
}
