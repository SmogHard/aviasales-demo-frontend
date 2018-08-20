import React from 'react';
import styled from 'styled-components';
import vk from './vk.png';
import facebook from './facebook.png';
import insta from './insta.png';
import twitter from './twitter.png';
import viber from './viber.png';
import googleplay from './googleplay.svg';
import winstore from './winstore.svg';
import appstore from './appstore.svg';

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

const LinkStyled = styled.a`
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

export default function () {
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
                    <LinkStyled href="#">Россия</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Таиланд</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Черногория</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Кипр</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Болгария</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Грузия</LinkStyled>
                  </Li>
                  <LiWithArrow>
                    <LinkStyled href="#">Все страны →</LinkStyled>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Авиакомпании</Title>
                <Ul>
                  <Li>
                    <LinkStyled href="#">Air Berlin</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Air France</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Alitalia</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Emirates</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">KLM</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Грузия</LinkStyled>
                  </Li>
                  <LiWithArrow>
                    <LinkStyled href="#">Все страны →</LinkStyled>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Аэропорты</Title>
                <Ul>
                  <Li>
                    <LinkStyled href="#">Шереметьево</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Курумоч</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Домодедово</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Толмачево</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Владивосток</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Гамбург</LinkStyled>
                  </Li>
                  <LiWithArrow>
                    <LinkStyled href="#">Все страны →</LinkStyled>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Страны</Title>
                <Ul>
                  <Li>
                    <LinkStyled href="#">Россия</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Таиланд</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Черногория</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Кипр</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Болгария</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Грузия</LinkStyled>
                  </Li>
                  <LiWithArrow>
                    <LinkStyled href="#">Все страны →</LinkStyled>
                  </LiWithArrow>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Направления</Title>
                <Ul>
                  <Li>
                    <LinkStyled href="#">MOW - SIP</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">MOW - AER</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">MOW - TIV</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">MOW - MRV</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">LED -MOW</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">MOW - BKK</LinkStyled>
                  </Li>
                </Ul>
              </List>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <List>
                <Title>Сервисы</Title>
                <Ul>
                  <Li>
                    <LinkStyled href="#">Горящие авиабилеты</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Календарь низких цен</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Карта низких цен</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Спецпредложения</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Таблица цен</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Блог</LinkStyled>
                  </Li>
                  <Li>
                    <LinkStyled href="#">Помощь</LinkStyled>
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
                  <LinkStyled href="#">О компании</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">Партнёрская программа</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">Реклама</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">Вакансии</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">Помощь</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">Правила</LinkStyled>
                </Name>
                <Name>
                  <LinkStyled href="#">White Label авиабилеты</LinkStyled>
                </Name>
              </Ul>
            </Nav>
            <Socials>
              <Icon>
                <Img src={vk} />
                <P>
                  <LinkStyled href="#">Вконтакте</LinkStyled>
                </P>
              </Icon>
              <Icon>
                <Img src={facebook} />
                <P>
                  <LinkStyled href="#">Фейсбук</LinkStyled>
                </P>
              </Icon>
              <Icon>
                <Img src={insta} />
                <P>
                  <LinkStyled href="#">Инстаграмм</LinkStyled>
                </P>
              </Icon>
              <Icon>
                <Img src={twitter} />
                <P>
                  <LinkStyled href="#">Твиттер</LinkStyled>
                </P>
              </Icon>
              <Icon>
                <Img src={viber} />
                <P>
                  <LinkStyled href="#">Вайбер</LinkStyled>
                </P>
              </Icon>
            </Socials>
            <P>
              <LinkStyled href="#">Поиск и бронирование отелей</LinkStyled>
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
