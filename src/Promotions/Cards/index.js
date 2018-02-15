import React from "react";
import styled from "styled-components";
import pobeda from "./pobeda.png";
import luft from "./luft.png";
import sign from "./sign.png";
import Card from "./Card";

const offers = [
  {
    title: "Билеты от 499 рублей!",
    sign: "",
    aviacompany: pobeda,
    price: "499",
    dayleft: "45",
    offertext: "Билеты от 499 рублей!",
    companyname: "Победа"
  },
  {
    title: "В Нью-Йорк от 20 680 рублей!",
    sign: sign,
    aviacompany: luft,
    price: "20 680",
    dayleft: "19",
    offertext: "Билеты от 499 рублей!",
    companyname: "Lufthansa"
  },
  {
    title: "В Лос-Анджелес от 20 360 рублей!",
    sign: sign,
    aviacompany: luft,
    price: "20 360",
    dayleft: "19",
    offertext: "Билеты от 499 рублей!",
    companyname: "Lufthansa"
  }
];

export default function() {
  return (
    <div className="row">
      {offers.map((offer, i) => (
        <div className="col-xs-12 col-md-4 col-xl-4" key={i}>
          <Card
            title={offer.title}
            sign={offer.sign}
            aviacompany={offer.aviacompany}
            price={offer.price}
            dayleft={offer.dayleft}
            offertext={offer.offertext}
            companyname={offer.companyname}
            key={i}
          />
        </div>
      ))}
    </div>
  );
}
