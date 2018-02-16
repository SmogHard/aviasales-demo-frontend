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
  ::placeholder {
    color: #a0b0b9;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const CityFrom = InputWrapper.extend`
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }
`;

const CityTo = InputWrapper.extend`
  @media (min-width: 768px) {
    border-top-right-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

const Departures = InputWrapper.extend`
  position: relative;
  @media (min-width: 768px) {
    border-bottom-left-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

const Arrival = InputWrapper.extend`
  position: relative;
`;

const SelectPassenger = InputWrapper.extend`
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
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 16px;
`;

const ButtonPassenger = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  line-height: 20px
  align-items: center;
  position: relative;
  background: transparent;
  cursor: pointer;

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

const Text = styled.span`
  line-height: 20px;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const Abbreviation = OpacityText.extend`
  position: absolute;
  right: 43px;
  top: 18px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

const DateFields = Layout.extend`
  display: flex;
  @media (min-width: 1200px) {
    flex-basis: 30%;
  }
`;

const DateSelect = styled.div`
  flex-basis: 50%;
`;

export default function() {
  return (
    <Inputs>
      <Layout>
        <CityFrom>
          <Input
            type="text"
            name="from"
            placeholder="Укажите город"
            defaultValue="Москва"
          />
          <Abbreviation>MOV</Abbreviation>
          <ButtonAction>
            <Img alt="Направление" src={arrow} />
          </ButtonAction>
        </CityFrom>
      </Layout>
      <Layout>
        <CityTo>
          <Input
            type="text"
            name="to"
            placeholder="Город прибытия"
            defaultValue=""
          />
        </CityTo>
      </Layout>
      <DateFields>
        <DateSelect>
          <Departures>
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
          </Departures>
        </DateSelect>
        <DateSelect>
          <Arrival>
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
          </Arrival>
        </DateSelect>
      </DateFields>
      <Layout>
        <SelectPassenger>
          <ButtonPassenger>
            <Text>
              1 пассажир, <OpacityText>эконом</OpacityText>
            </Text>
          </ButtonPassenger>
        </SelectPassenger>
      </Layout>
    </Inputs>
  );
}
