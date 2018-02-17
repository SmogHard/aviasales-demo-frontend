import React from "react";
import styled from "styled-components";
import Card from "./Card";
import pobeda from "./pobeda.png";
import luft from "./luft.png";
import sign from "./sign.png";

const Title = styled.h1`
  color: #ffffff;
  text-align: left;
  font-weight: 500;
  padding-top: 16px;
  margin-top: 0px;
`;

const SpecialOffers = styled.section`
  background: linear-gradient(to bottom, #00b0de 0%, #196ebd 100%);
`;

const Text = styled.p``;

const Footer = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  padding-bottom: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Link = styled.a`
  color: #ffffff;
`;

const offers = [
  {
    title: "Билеты от 499 рублей!",
    sign: "",
    aviaCompany: pobeda,
    price: "499",
    dayLeft: "45",
    offerText: "Билеты от 499 рублей!",
    companyName: "Победа"
  },
  {
    title: "В Нью-Йорк от 20 680 рублей!",
    sign: sign,
    aviaCompany: luft,
    price: "20 680",
    dayLeft: "19",
    offerText: "Билеты от 499 рублей!",
    companyName: "Lufthansa"
  },
  {
    title: "В Лос-Анджелес от 20 360 рублей!",
    sign: sign,
    aviaCompany: luft,
    price: "20 360",
    dayLeft: "19",
    offerText: "Билеты от 499 рублей!",
    companyName: "Lufthansa"
  }
];
export default function() {
  return (
    <SpecialOffers>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Title>Спецпредложения на авиабилеты</Title>
            <div className="row">
              {offers.map((offer, i) => (
                <div className="col-xs-12 col-md-4 col-xl-4" key={i}>
                  <Card
                    title={offer.title}
                    sign={offer.sign}
                    aviaCompany={offer.aviaCompany}
                    price={offer.price}
                    dayLeft={offer.dayLeft}
                    offerText={offer.offerText}
                    companyName={offer.companyName}
                    key={i}
                  />
                </div>
              ))}
            </div>
            <Footer>
              <Text>
                <Link href="#">Смотреть все спецпредложения</Link>
              </Text>
              <Text>* средняя цена по направлению</Text>
            </Footer>
          </div>
        </div>
      </div>
    </SpecialOffers>
  );
}
