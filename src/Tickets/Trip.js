import React from "react";
import styled from "styled-components";
import pin from "./pin.svg";
import air_up from "./air-up.png";
import air_down from "./air-down.png";

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

export default function() {
  return (
    <Wrapper>
      <From>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> 00:05 </Time>
        </Clock>
        <City>Москва</City>
        <Day>24 фев 2018, Сб</Day>
      </From>
      <RoutePath>
        <TotalWrap>
          <AirIcon src={air_up} />
          <Total>всего: 5ч</Total>
          <AirIcon src={air_down} />
        </TotalWrap>
      </RoutePath>
      <To>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> 00:05 </Time>
        </Clock>
        <City>Москва</City>
        <Day>24 фев 2018, Сб</Day>
      </To>
    </Wrapper>
  );
}
