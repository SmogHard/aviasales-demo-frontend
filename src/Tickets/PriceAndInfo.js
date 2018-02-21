import React from "react";
import styled from "styled-components";

const Baggage = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Icon = styled.img`
  margin: 4px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: transparent;
  height: 100%;
  @media (min-width: 768px) {
    background: #ff6d00;
    margin-left: 24px;
    margin-right: 23px;
    height: initial;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 4px;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Price = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
    color: #ffffff;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
  }
`;

const PriceXs = styled.span`
  color: #ff6d00;
  font-size: 22px;
  line-height: 26px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-basis: 33.3333%;

  @media (min-width: 768px) {
    border-right: 1px solid #dddddd;
  }
`;

const Proposal = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
  color: #a0b0b9;
  text-align: center;
`;

const Offer = styled.p`
  margin: 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function(props) {
  return (
    <Buy>
      <Baggage>
        <Icon src={props.info.baggage} />
      </Baggage>
      <Button>
        <TextWrapper>
          <Offer>
            Купить <br /> <Price> за {props.info.price}</Price>
          </Offer>
          <PriceXs>{props.info.price} ₽</PriceXs>
        </TextWrapper>
      </Button>
      <Proposal>на {props.info.proposal}</Proposal>
    </Buy>
  );
}
