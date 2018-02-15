import React from "react";
import styled from "styled-components";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Img = styled.img``;

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const CityFrom = Div.extend`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }
`;

const CityTo = Div.extend`
  @media (min-width: 768px) {
    border-top-right-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

const DateDepartures = Div.extend`
  @media (min-width: 768px) {
    border-bottom-left-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const DateArrival = Div.extend``;

const SelectPassenger = Div.extend`
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 2px;
  }
`;

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  margin-right: 16px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ButtonPassenger = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 20px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;

  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

const Span = styled.span`
  color: #4a4a4a;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 23.3333%;
  }
`;

const DateSelect = Box.extend`
  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

const Date = styled.div`
  flex-basis: 50%;
`;

export default function() {
  return (
    <Wrapper>
      <Box>
        <CityFrom>
          <Input
            type="text"
            name="from"
            placeholder="Укажите город"
            defaultValue="Москва"
          />
          <Span>MOV</Span>
          <ButtonAction>
            <Img alt="Направление" src={arrow} />
          </ButtonAction>
        </CityFrom>
      </Box>
      <Box>
        <CityTo>
          <Input
            type="text"
            name="to"
            placeholder="Город прибытия"
            defaultValue=""
          />
        </CityTo>
      </Box>
      <DateSelect>
        <DateWrapper>
          <Date>
            <DateDepartures>
              <Input
                date
                type="text"
                name="dtfrom"
                placeholder="Туда"
                defaultValue=""
              />
              <ButtonAction>
                <Img alt="Календарь" src={calendar} />
              </ButtonAction>
            </DateDepartures>
          </Date>
          <Date>
            <DateArrival>
              <Input
                date
                type="text"
                name="dtto"
                placeholder="Обратно"
                defaultValue=""
              />
              <ButtonAction>
                <Img alt="Календарь" src={calendar} />
              </ButtonAction>
            </DateArrival>
          </Date>
        </DateWrapper>
      </DateSelect>
      <Box>
        <SelectPassenger>
          <ButtonPassenger>
            <span>
              1 пассажир, <Span>эконом</Span>
            </span>
          </ButtonPassenger>
        </SelectPassenger>
      </Box>
    </Wrapper>
  );
}
