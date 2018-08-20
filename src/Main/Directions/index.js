import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Types from './Types';
import Card from './Card';
import krasnodar from './krasnodar.jpg';
import minvody from './minvod.jpg';
import sochi from './sochi.jpg';
import simferopol from './simpheropol.jpg';
import barselona from './barselona.jpg';
import saintp from './saintp.jpg';
import flagRu from './flagru.png';
import flagEs from './flages.png';

const Section = styled.section`
  background: #f8fcff;
  text-align: center;
`;

const tickets = [
  {
    key: 1,
    img: krasnodar,
    city: 'Краснодар',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1212,
    date: '18 марта',
  },
  {
    key: 2,
    img: sochi,
    city: 'Сочи (Адлер)',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1334,
    date: '27 марта',
  },
  {
    key: 3,
    img: saintp,
    city: 'Санкт-Петербург',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 1508,
    date: '19 февраля',
  },
  {
    key: 4,
    img: minvody,
    city: 'Минеральные воды',
    country: 'РОССИЯ',
    flag: flagRu,
    price: 2074,
    date: '13 марта',
  },
  {
    key: 5,
    img: simferopol,
    city: 'Симферополь (Крым)',
    country: 'КРЫМ',
    flag: flagRu,
    price: 2407,
    date: '13 марта',
  },
  {
    key: 6,
    img: barselona,
    city: 'Барселона',
    country: 'ИСПАНИЯ',
    flag: flagEs,
    price: 4247,
    date: '24 марта',
  },
];
export default function () {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Title />
            <Types />
            <div className="row">
              {tickets.map(ticket => (
                <div className="col-xs-12 col-md-12 col-xl-6" key={ticket.id}>
                  <Card
                    img={ticket.img}
                    city={ticket.city}
                    country={ticket.country}
                    flag={ticket.flag}
                    price={ticket.price}
                    date={ticket.date}
                    key={ticket.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
