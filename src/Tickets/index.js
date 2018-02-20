import React from "react";
import styled from "styled-components";
import baggage_none from "./baggage-none.svg";
import Flight from "./Flight";

const Ticket = styled.div`
  background: #ffffff;
  display: flex;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Baggage = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  margin: 4px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: #ff6d00;
  margin-left: 24px;
  margin-right: 23px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 4px;
`;

const Price = styled.span`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
`;

const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-basis: 33.3333%;
  border-right: 1px solid #dddddd;
`;

const Proposal = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
  color: #a0b0b9;
  text-align: center;
`;

export default function() {
  return (
    <Ticket>
      <Buy>
        <Baggage>
          <Icon src={baggage_none} />
          <Icon src={baggage_none} />
        </Baggage>
        <Button>
          <Text>
            Купить <br /> <Price>за 7 712 ₽</Price>
          </Text>
        </Button>
        <Proposal>на Clickavia</Proposal>
      </Buy>
      <Flight />
    </Ticket>
  );
}
