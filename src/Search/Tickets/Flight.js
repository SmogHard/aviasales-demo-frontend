import React from "react";
import styled from "styled-components";
import share from "./share.svg";
import Trip from "./Trip";
import AirlineLogo from "./AirlineLogo";
import { localization } from "./../../Common/localization";

const Flight = styled.div`
  flex-basis: 66.6666%;
  padding-right: 6px;
  padding-top: 12px;
  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: flex-end;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const InfoAndShare = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Type = styled.button`
  background: transparent;
  border: 1px solid #2196f3;
  color: #2196f3;
  font-size: 10px;
  line-height: 18px;
  padding: 4px 11px;
  border-radius: 15px;
  margin-right: 15px;
`;

const Share = styled.img`
  width: 17px;
  height: 14px;
`;

const Trips = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Line = styled.div`
  width: 100%;
  margin: 24px 0px;
  border: 0.5px dotted #dddddd;
`;

export default function(props) {
  const flight = props.flight;
  return (
    <Flight>
      <Header>
        <AirlineLogo airline={flight.airline} />
        <InfoAndShare>
          {flight.type && <Type> {localization["common"][flight.type]} </Type>}
          <Share src={share} />
        </InfoAndShare>
      </Header>
      <Trips>
        <Trip data={flight.to} />
        <Line />
        <Trip data={flight.from} />
      </Trips>
    </Flight>
  );
}
