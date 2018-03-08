import React from "react";
import styled from "styled-components";
import suitcase_none from "./suitcase-none.svg";
import suitcase from "./suitcase.svg";
import handbag from "./handbag.svg";

const Baggage = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Icon = styled.img`
  margin: 4px;
`;

const IconWrap = styled.div`
  position: relative;
`;

const Weight = styled.div`
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  color: #9ab0b9;
  position: absolute;
  top: 30%;
  left: 25%;
`;

const SelectBag = styled.div`
  margin-bottom: 16px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const BaggageHighCost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;
const BaggageWithoutSuite = BaggageHighCost.extend`
  background: #f8fbfb;
  border-bottom: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
`;

const WithoutSuiteCase = styled.p`
  text-align: center;
  margin: 0px;
  font-size: 10px;
  line-height: 15px;
  color: #9ab0b9;
`;

const PriceForSuiteCase = styled.p`
  text-align: center;
  margin: 0px;
  font-size: 10px;
  line-height: 15px;
  color: #66d295;
`;

const TicketLeft = styled.p`
  display: none;
  margin: 0px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const BagWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: #ff654e;
  text-align: center;
  font-size: 12px;
  padding: 8px 0px;
`;

export default function(props) {
  const { info } = props;

  if (!info.baggageWithoutSuite) {
    return (
      <BagWrap>
        <Baggage>
          <IconWrap>
            <Icon src={handbag} />
            <Weight>{info.baggage.handbag}</Weight>
          </IconWrap>
          <IconWrap>
            <Icon src={suitcase} />
            <Weight>{info.baggage.suitcase}</Weight>
          </IconWrap>
        </Baggage>
        <TicketLeft>
          {info.ticketsLeft && `Осталось ${info.ticketsLeft} билета`}
        </TicketLeft>
      </BagWrap>
    );
  } else {
    return (
      <SelectBag>
        <BaggageWithoutSuite>
          <Baggage>
            <IconWrap>
              <Icon src={handbag} />
              <Weight>{info.baggage.handbag}</Weight>
            </IconWrap>
            <IconWrap>
              <Icon src={suitcase_none} />
            </IconWrap>
          </Baggage>
          <WithoutSuiteCase>Нет багажа</WithoutSuiteCase>
        </BaggageWithoutSuite>
        <BaggageHighCost>
          <Baggage>
            <IconWrap>
              <Icon src={handbag} />
              <Weight>{info.baggage.handbag}</Weight>
            </IconWrap>
            <IconWrap>
              <Icon src={suitcase} />
              <Weight>{info.baggage.suitcase}</Weight>
            </IconWrap>
          </Baggage>
          <PriceForSuiteCase>- 267 ₽</PriceForSuiteCase>
        </BaggageHighCost>
      </SelectBag>
    );
  }
}
