import React from 'react';
import styled from 'styled-components';
import plane from './plane.png';
import mail from './mail.png';
import list from './list.png';

const Section = styled.section`
  background: #ffffff;
`;

const Article = styled.article`
  position: relative;
`;

const Title = styled.h4`
  font-size: 13px;
  margin-left: 24px;
  margin-top: 24px;
  margin-bottom: 16px;
  padding-top: 3px;
`;

const Image = styled.img`
  top: 1px;
  width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  position: absolute;
`;

const More = styled.span`
  color: #00ace2;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
`;

export default function () {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <Article>
              <Image src={plane} alt="Самолет" />
              <Title>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</Title>
              <Text>
                Aviasales.ru — это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням
                авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить
                авиабилет дешево, воспользуйтесь нашим поиском, который совершенно бесплатно
                сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Больше нет
                смысла ходить в авиакассы, обзванивать агентства — дешевый билет находится на
                расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самолет в
                Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том,
                как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год.{' '}
                <More>Подробнее</More>
              </Text>
            </Article>
            <Article>
              <Image src={mail} alt="Письмо" />
              <Title>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</Title>
              <Text>
                Электронный авиабилет — это, по сути, обычный билет на самолет, но только в менее
                привычном для путешественника виде. Вся информация об авиаперелете (данные
                пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на
                руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив
                маршрут-квитанцию, удивлены ее видом — это обыкновенный лист формата А4, на котором
                распечатана вся информация о предстоящем перелете. Однако это действительно
                официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром.
                При регистрации на рейс пассажир должен предъявить маршрут-квитанцию вместе с
                удостоверением личности точно так же, как предъявляют обыкновенный бумажный билет.
                Следует отметить, что электронный билет, приобретенный онлайн, стоит дешевле своего
                бумажного аналога.
                <More> Подробнее</More>
              </Text>
            </Article>
            <Article>
              <Image src={list} alt="Список" />
              <Title>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</Title>
              <Text>
                Есть масса путеводителей по странам, но ни одного о том, как провести время в
                самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20
                советов о подготовке к путешествию. Ведь настоящее путешествие начинается со слов
                «Добро пожаловать на борт нашего самолета»!
                <More> Подробнее</More>
              </Text>
            </Article>
          </div>
        </div>
      </div>
    </Section>
  );
}
