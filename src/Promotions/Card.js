import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const Header = styled.div`
  background: #cd2027;
  color: #ffffff;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardSection = styled.div`
  display: flex;
  background: #ffffff;
  padding-left: 8px;
  padding-right: 8px;
  text-align: left;
  flex-direction: column;
`;

const CardButton = styled.button`
  width: 100%;
  border: 2px solid #cd1f27;
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 27px;
  margin-bottom: 16px;
  background: #ffffff;
  font-size: 16px;
  color: #d93533;
`;

const CardOffer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const OfferLabel = styled.div`
  text-align: right;
`;

const SmallText = styled.span`
  font-size: 12px;
`;

const CompanyImg = styled.img`
  weight: 100px;
  height: 25px;
`;

const Sign = styled.img`
  margin-right: 16px;
  flex: 0 0 auto;
`;

const Text = styled.p`
  padding-top: 22px;
  padding-bottom: 21px;
  padding-left: 16px;
  margin: 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Price = styled.p`
  font-size: 20px;
  color: #5c5c5c;
  margin-top: 18px;
  margin-bottom: 10px;
`;

const DayLeft = styled.p`
  font-size: 12px;
  color: #d93633;
  margin-top: 0px;
  margin-bottom: 16px;
`;

const OfferText = styled.p`
  font-size: 12px;
  line-height: 16px;
  margin: 0px;
`;

const OfferTextPrice = OfferText.extend``;

export default props => {
  return (
    <Card>
      <Header>
        <Text> {props.title}</Text>
        <Sign alt="" src={props.sign} />
      </Header>
      <CardSection>
        <CardOffer>
          <CompanyImg alt="pobeda" src={props.aviaCompany} />
          <OfferLabel>
            <Price>
              <SmallText>от </SmallText> {props.price} ₽
            </Price>
            <DayLeft> Осталось {props.dayLeft} дней</DayLeft>
          </OfferLabel>
        </CardOffer>
        <OfferTextPrice>{props.offerText}</OfferTextPrice>
        <OfferText>
          Специальное предложение от авиакомпании {props.companyName}
        </OfferText>
        <CardButton>Узнать подробности</CardButton>
      </CardSection>
    </Card>
  );
};
