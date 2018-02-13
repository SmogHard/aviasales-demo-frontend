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

const P = styled.p`
  color: ${props => props.color};
  padding-top: ${props => props.paddingtop};
  padding-bottom: ${props => props.paddingbot};
  padding-left: ${props => props.paddingleft};
  padding-right: ${props => props.paddingright};
  font-size: ${props => props.fontsize};
  margin: ${props => props.margin};
`;

const Wrapper = styled.div`
  text-align: left;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e6e8;
`;

const LinksList = styled.div``;

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

const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const SocialBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Img = styled.img`
  margin-bottom: ${props => props.marginbot};
  margin-right: 4px;
`;

const Nav = styled.div`
  text-align: left;
`;

const NavLi = styled.li`
  display: inline-block;
  margin-right: 6px;
`;

const FlexBox = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    padding-top: 40px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WrapFlex = styled.div`
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
        <Wrapper>
          <div className="row">
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2">
              <LinksList>
                {" "}
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
              </LinksList>
            </div>
          </div>
        </Wrapper>
        <FlexBox>
          <WrapFlex>
            <Nav>
              <Ul>
                <NavLi>
                  <Link href="#">О компании</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">Партнёрская программа</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">Реклама</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">Вакансии</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">Помощь</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">Правила</Link>
                </NavLi>
                <NavLi>
                  <Link href="#">White Label авиабилеты</Link>
                </NavLi>
              </Ul>
            </Nav>
            <SocialBox>
              <SocialWrap>
                <Img src={vk} />
                <P>Вконтакте</P>
              </SocialWrap>
              <SocialWrap>
                <Img src={facebook} />
                <P>Фейсбук</P>
              </SocialWrap>
              <SocialWrap>
                <Img src={insta} />
                <P>Инстаграмм</P>
              </SocialWrap>
              <SocialWrap>
                <Img src={twitter} />
                <P>Твиттер</P>
              </SocialWrap>
              <SocialWrap>
                <Img src={viber} />
                <P>Вайбер </P>
              </SocialWrap>
            </SocialBox>
            <P>
              <Link href="#">Поиск и бронирование отелей</Link>
            </P>
          </WrapFlex>
          <WrapFlex>
            <AppsBox>
              <Button>
                <Img marginbot="8px" src={appstore} />
              </Button>
              <Button>
                <Img marginbot="8px" src={googleplay} />
              </Button>
              <Button>
                <Img marginbot="8px" src={winstore} />
              </Button>
            </AppsBox>
            <P>© 2007–2018, Aviasales — дешевые авиабилеты</P>
          </WrapFlex>
        </FlexBox>
      </div>
    </Footer>
  );
}
