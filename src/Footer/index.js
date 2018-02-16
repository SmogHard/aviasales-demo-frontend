import React from "react";
import styled from "styled-components";
import vk from "./vk.png";
import facebook from "./facebook.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import viber from "./viber.png";
import googleplay from "./googleplay.png";
import winstore from "./winstore.png";
import appstore from "./appstore.png";

const Footer = styled.footer`
  background: #ffffff;
  margin-top: 24px;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: #5a5a5a;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const P = styled.p``;

const Navigation = styled.nav`
  text-align: left;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e6e8;
`;

const List = styled.div``;

const Li = styled.li`
  font-weight: 600;
  margin-top: 5px;
  white-space: nowrap;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  font-size: 12px;
  color: #5a5a5a;
  line-height: 16px;
  text-decoration: none;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Img = styled.img`
  margin-right: 4px;
`;

const Image = Img.extend`
  margin-bottom: 8px;
`;

const Nav = styled.div`
  text-align: left;
`;

const Name = styled.li`
  display: inline-block;
  margin-right: 6px;
`;

const AboutUs = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    padding-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Links = styled.div`
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
`;

export default function() {
  return (
    <Footer>
      <div className="container">
        <Navigation>
          <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Страны</Title>
                <Ul>
                  <li>
                    <Link href="#">Россия</Link>
                  </li>
                  <li>
                    <Link href="#">Таиланд</Link>
                  </li>
                  <li>
                    <Link href="#">Черногория</Link>
                  </li>
                  <li>
                    <Link href="#">Кипр</Link>
                  </li>
                  <li>
                    <Link href="#">Болгария</Link>
                  </li>
                  <li>
                    <Link href="#">Грузия</Link>
                  </li>
                  <Li>
                    <Link href="#">Все страны →</Link>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Авиакомпании</Title>
                <Ul>
                  <li>
                    <Link href="#">Air Berlin</Link>
                  </li>
                  <li>
                    <Link href="#">Air France</Link>
                  </li>
                  <li>
                    <Link href="#">Alitalia</Link>
                  </li>
                  <li>
                    <Link href="#">Emirates</Link>
                  </li>
                  <li>
                    <Link href="#">KLM</Link>
                  </li>
                  <li>
                    <Link href="#">Грузия</Link>
                  </li>
                  <Li>
                    <Link href="#">Все страны →</Link>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Аэропорты</Title>
                <Ul>
                  <li>
                    <Link href="#">Шереметьево</Link>
                  </li>
                  <li>
                    <Link href="#">Курумоч</Link>
                  </li>
                  <li>
                    <Link href="#">Домодедово</Link>
                  </li>
                  <li>
                    <Link href="#">Толмачево</Link>
                  </li>
                  <li>
                    <Link href="#">Владивосток</Link>
                  </li>
                  <li>
                    <Link href="#">Гамбург</Link>
                  </li>
                  <Li>
                    <Link href="#">Все страны →</Link>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Страны</Title>
                <Ul>
                  <li>
                    <Link href="#">Россия</Link>
                  </li>
                  <li>
                    <Link href="#">Таиланд</Link>
                  </li>
                  <li>
                    <Link href="#">Черногория</Link>
                  </li>
                  <li>
                    <Link href="#">Кипр</Link>
                  </li>
                  <li>
                    <Link href="#">Болгария</Link>
                  </li>
                  <li>
                    <Link href="#">Грузия</Link>
                  </li>
                  <Li>
                    <Link href="#">Все страны →</Link>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Направления</Title>
                <Ul>
                  <li>
                    <Link href="#">MOW - SIP</Link>
                  </li>
                  <li>
                    <Link href="#">MOW - AER</Link>
                  </li>
                  <li>
                    <Link href="#">MOW - TIV</Link>
                  </li>
                  <li>
                    <Link href="#">MOW - MRV</Link>
                  </li>
                  <li>
                    <Link href="#">LED -MOW</Link>
                  </li>
                  <li>
                    <Link href="#">MOW - BKK</Link>
                  </li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Сервисы</Title>
                <Ul>
                  <li>
                    <Link href="#">Горящие авиабилеты</Link>
                  </li>
                  <li>
                    <Link href="#">Календарь низких цен</Link>
                  </li>
                  <li>
                    <Link href="#">Карта низких цен</Link>
                  </li>
                  <li>
                    <Link href="#">Спецпредложения</Link>
                  </li>
                  <li>
                    <Link href="#">Таблица цен</Link>
                  </li>
                  <li>
                    <Link href="#">Блог</Link>
                  </li>
                  <li>
                    <Link href="#">Помощь</Link>
                  </li>
                </Ul>
              </List>
            </div>
          </div>
        </Navigation>
        <AboutUs>
          <Links>
            <Nav>
              <Ul>
                <Name>
                  <Link href="#">О компании</Link>
                </Name>
                <Name>
                  <Link href="#">Партнёрская программа</Link>
                </Name>
                <Name>
                  <Link href="#">Реклама</Link>
                </Name>
                <Name>
                  <Link href="#">Вакансии</Link>
                </Name>
                <Name>
                  <Link href="#">Помощь</Link>
                </Name>
                <Name>
                  <Link href="#">Правила</Link>
                </Name>
                <Name>
                  <Link href="#">White Label авиабилеты</Link>
                </Name>
              </Ul>
            </Nav>
            <Socials>
              <Icon>
                <Img src={vk} />
                <P>
                  <Link href="#">Вконтакте</Link>
                </P>
              </Icon>
              <Icon>
                <Img src={facebook} />
                <P>
                  <Link href="#">Фейсбук</Link>
                </P>
              </Icon>
              <Icon>
                <Img src={insta} />
                <P>
                  <Link href="#">Инстаграмм</Link>
                </P>
              </Icon>
              <Icon>
                <Img src={twitter} />
                <P>
                  <Link href="#">Твиттер</Link>
                </P>
              </Icon>
              <Icon>
                <Img src={viber} />
                <P>
                  <Link href="#">Вайбер</Link>
                </P>
              </Icon>
            </Socials>
            <P>
              <Link href="#">Поиск и бронирование отелей</Link>
            </P>
          </Links>
          <Links>
            <Apps>
              <Button>
                <Image src={appstore} />
              </Button>
              <Button>
                <Image src={googleplay} />
              </Button>
              <Button>
                <Image src={winstore} />
              </Button>
            </Apps>
            <P>© 2007–2018, Aviasales — дешевые авиабилеты</P>
          </Links>
        </AboutUs>
      </div>
    </Footer>
  );
}
