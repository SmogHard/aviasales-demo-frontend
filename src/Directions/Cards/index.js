import React from "react";
import Card from "./Card";
import krasnodar from "./krasnodar.jpg";
import minvody from "./minvod.jpg";
import sochi from "./sochi.jpg";
import simferopol from "./simpheropol.jpg";
import barselona from "./barselona.jpg";
import saintp from "./saintp.jpg";
import flag_ru from "./flagru.png";
import flag_es from "./flages.png";

export const tickets = [
  {
    img: krasnodar,
    city: "Краснодар",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1212,
    date: "18 марта"
  },
  {
    img: sochi,
    city: "Сочи (Адлер)",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1334,
    date: "27 марта"
  },
  {
    img: saintp,
    city: "Санкт-Петербург",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 1508,
    date: "19 февраля"
  },
  {
    img: minvody,
    city: "Минеральные воды",
    country: "РОССИЯ",
    flag: flag_ru,
    price: 2074,
    date: "13 марта"
  },
  {
    img: simferopol,
    city: "Симферополь (Крым)",
    country: "КРЫМ",
    flag: flag_ru,
    price: 2407,
    date: "13 марта"
  },
  {
    img: barselona,
    city: "Барселона",
    country: "ИСПАНИЯ",
    flag: flag_es,
    price: 4247,
    date: "24 марта"
  }
];
export default function() {
  return (
    <div className="row">
      {tickets.map((ticket, i) => (
        <div className="col-xs-12 col-md-12 col-xl-6" key={i}>
          <Card
            img={ticket.img}
            city={ticket.city}
            country={ticket.country}
            flag={ticket.flag}
            price={ticket.price}
            date={ticket.date}
            key={i}
          />
        </div>
      ))}
    </div>
  );
}
