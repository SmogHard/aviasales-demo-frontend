import React from "react";
import styled from "styled-components";
import pin from "./pin.svg";
import air_up from "./air-up.png";
import air_down from "./air-down.png";
import dot from "./dot.png";
import line from "./line.png";

const Wrapper = styled.div`
  display: flex;
`;

const Pin = styled.img`
  margin-right: 8px;
`;

const Time = styled.p`
  font-size: 28px;
  line-height: 40px;
  margin: 0px;
`;

const Clock = styled.div`
  display: flex;
`;

const From = styled.div`
  flex-basis: 20%;
`;

const To = From.extend`
  justify-content: flex-end;
`;

const Day = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #9ca5a8;
  margin: 0px;
`;

const Total = Day.extend``;

const City = Day.extend`
  font-weight: 500;
`;

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7px;
}
`;

const RoutePath = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  padding-right: 16px;
  padding-left: 16px;
`;

const AirIcon = styled.img``;

const Snippet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dot = styled.img``;

const Line = styled.img`
  padding: 2px;
`;

const AirAbbreviation = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #9ca5a8;
  margin: 0px;
`;

const RouteAirPorts = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export default function(props) {
  const trip = props.data;
  return (
    <Wrapper>
      <From>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> {trip.takeoff} </Time>
        </Clock>
        <City>{trip.cityFrom}</City>
        <Day>{trip.dateFrom}</Day>
      </From>
      <RoutePath>
        <TotalWrap>
          <AirIcon src={air_up} />
          <Total>{trip.total}</Total>
          <AirIcon src={air_down} />
        </TotalWrap>
        <Snippet>
          <Dot src={dot} /> <Line src={line} /> <Dot src={dot} />
        </Snippet>
        <RouteAirPorts>
          <AirAbbreviation>{trip.airportFrom}</AirAbbreviation>
          <AirAbbreviation>{trip.airportTo}</AirAbbreviation>
        </RouteAirPorts>
      </RoutePath>
      <To>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> {trip.landing} </Time>
        </Clock>
        <City>{trip.cityTo}</City>
        <Day>{trip.dateTo}</Day>
      </To>
    </Wrapper>
  );
}
