import React from "react";
import styled from "styled-components";
import vk from "./vk.png";
import facebook from "./facebook.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import viber from "./viber.png";
import googleplay from "./googleplay.svg";
import winstore from "./winstore.svg";
import appstore from "./appstore.svg";

const Footer = styled.footer`
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: #5a5a5a;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const P = styled.p``;

const Navigation = styled.nav`
  text-align: left;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e6e8;
`;

const List = styled.div``;

const LiWithArrow = styled.li`
  font-weight: 600;
  margin-top: 15px;
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
  margin-right: 28px;
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
  margin-right: 10px;
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

const Li = styled.li`
  margin-top: 12px;
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
                  <Li>
                    <Link href="#">Россия</Link>
                  </Li>
                  <Li>
                    <Link href="#">Таиланд</Link>
                  </Li>
                  <Li>
                    <Link href="#">Черногория</Link>
                  </Li>
                  <Li>
                    <Link href="#">Кипр</Link>
                  </Li>
                  <Li>
                    <Link href="#">Болгария</Link>
                  </Li>
                  <Li>
                    <Link href="#">Грузия</Link>
                  </Li>
                  <LiWithArrow>
                    <Link href="#">Все страны →</Link>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Авиакомпании</Title>
                <Ul>
                  <Li>
                    <Link href="#">Air Berlin</Link>
                  </Li>
                  <Li>
                    <Link href="#">Air France</Link>
                  </Li>
                  <Li>
                    <Link href="#">Alitalia</Link>
                  </Li>
                  <Li>
                    <Link href="#">Emirates</Link>
                  </Li>
                  <Li>
                    <Link href="#">KLM</Link>
                  </Li>
                  <Li>
                    <Link href="#">Грузия</Link>
                  </Li>
                  <LiWithArrow>
                    <Link href="#">Все страны →</Link>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Аэропорты</Title>
                <Ul>
                  <Li>
                    <Link href="#">Шереметьево</Link>
                  </Li>
                  <Li>
                    <Link href="#">Курумоч</Link>
                  </Li>
                  <Li>
                    <Link href="#">Домодедово</Link>
                  </Li>
                  <Li>
                    <Link href="#">Толмачево</Link>
                  </Li>
                  <Li>
                    <Link href="#">Владивосток</Link>
                  </Li>
                  <Li>
                    <Link href="#">Гамбург</Link>
                  </Li>
                  <LiWithArrow>
                    <Link href="#">Все страны →</Link>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Страны</Title>
                <Ul>
                  <Li>
                    <Link href="#">Россия</Link>
                  </Li>
                  <Li>
                    <Link href="#">Таиланд</Link>
                  </Li>
                  <Li>
                    <Link href="#">Черногория</Link>
                  </Li>
                  <Li>
                    <Link href="#">Кипр</Link>
                  </Li>
                  <Li>
                    <Link href="#">Болгария</Link>
                  </Li>
                  <Li>
                    <Link href="#">Грузия</Link>
                  </Li>
                  <LiWithArrow>
                    <Link href="#">Все страны →</Link>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Направления</Title>
                <Ul>
                  <Li>
                    <Link href="#">MOW - SIP</Link>
                  </Li>
                  <Li>
                    <Link href="#">MOW - AER</Link>
                  </Li>
                  <Li>
                    <Link href="#">MOW - TIV</Link>
                  </Li>
                  <Li>
                    <Link href="#">MOW - MRV</Link>
                  </Li>
                  <Li>
                    <Link href="#">LED -MOW</Link>
                  </Li>
                  <Li>
                    <Link href="#">MOW - BKK</Link>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Сервисы</Title>
                <Ul>
                  <Li>
                    <Link href="#">Горящие авиабилеты</Link>
                  </Li>
                  <Li>
                    <Link href="#">Календарь низких цен</Link>
                  </Li>
                  <Li>
                    <Link href="#">Карта низких цен</Link>
                  </Li>
                  <Li>
                    <Link href="#">Спецпредложения</Link>
                  </Li>
                  <Li>
                    <Link href="#">Таблица цен</Link>
                  </Li>
                  <Li>
                    <Link href="#">Блог</Link>
                  </Li>
                  <Li>
                    <Link href="#">Помощь</Link>
                  </Li>
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
