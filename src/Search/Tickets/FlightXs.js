import React from "react";
import styled from "styled-components";
import clock from "./clock.png";

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

const transfer = data => {
  if (!data) {
    return "Прямой";
  } else {
    return data;
  }
};

const Total = styled.div`
  flex-basis: 30%;
`;

const Time = styled.div`
  flex-basis: 50%;
`;

export default function(props) {
  const flight = props.flight;
  return (
    <Flight>
      <Time>
        <Icon src={props.icon} />
        {flight.takeoff} - {flight.landing}{" "}
      </Time>
      <Total>
        <Icon src={clock} />
        {flight.total}
      </Total>
      <Transfers>{transfer(flight.transfers)}</Transfers>
    </Flight>
  );
}
