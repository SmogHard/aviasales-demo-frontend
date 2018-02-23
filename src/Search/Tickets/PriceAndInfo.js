import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";
import Baggage from "./Baggage";

const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: transparent;
  height: 100%;
  cursor: pointer;
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

const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;

const OtherOffer = styled.div`
  display: flex;
  padding: 4px 24px;
  justify-content: space-between;
`;

const Link = styled.a`
  margin: 0px;
  font-size: 12px;
  color: #59bce5;
  cursor: pointer;
`;

const More = Link.extend`
  padding-top: 8px;
  padding-bottom: 16px;
  text-align: center;
`;

const Other = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function(props) {
  let formatter = [{ style: "decimal" }];
  return (
    <Buy>
      <Baggage baggage={props.info.baggage} />
      <Button>
        <TextWrapper>
          <Offer>
            Купить <br />
            <Price>
              за{" "}
              <FormattedNumber
                value={props.info.price}
                style={formatter.style}
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />{" "}
              ₽
            </Price>
          </Offer>
          <PriceXs>
            <FormattedNumber
              value={props.info.price}
              style={formatter.style}
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />{" "}
            ₽
          </PriceXs>
        </TextWrapper>
      </Button>
      <Proposal>на {props.info.proposal}</Proposal>
      {props.info.more && (
        <Other>
          <Prices>
            <OtherOffer>
              <Link>{props.info.more[0].company}</Link>
              <Link>{props.info.more[0].price} ₽</Link>
            </OtherOffer>
          </Prices>
          <Prices>
            <OtherOffer>
              <Link>{props.info.more[1].company}</Link>
              <Link>{props.info.more[1].price} ₽</Link>
            </OtherOffer>
          </Prices>
          <Prices>
            <OtherOffer>
              <Link>{props.info.more[2].company}</Link>
              <Link>{props.info.more[2].price} ₽</Link>
            </OtherOffer>
          </Prices>
          <Prices>
            <More>+ еще 3 предложения</More>
          </Prices>
        </Other>
      )}
    </Buy>
  );
}
