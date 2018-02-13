import React from "react";
import styled from "styled-components";
import calen from "./calen.png";
import russian from "./flagru.png";
import moldova from "./flagmd.png";
import armenia from "./flagam.png";

const Title = styled.h2`
  text-align: center;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Section = styled.section`
  background: linear-gradient(to bottom, #f8fcff 0%, #ffffff 100%);
  text-align: center;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
`;

const List = styled.div`
  margin-top: 40px;
  padding-bottom: 24px;
  border-bottom: ${props => (props.border ? "1px dashed #AFBEC6" : 0)};
`;

const ListTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 0px;
`;

const ListTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const ListTitleWrap = styled.div`
  text-align: left;
`;

const ListTextCity = styled.div`
  text-align: left;
  font-size: 16px;
  color: #4a4a4a;
`;

const ListTextPrices = styled.div`
  text-align: right;
`;

const ListTextBox = styled.div``;

const Link = styled.a`
  color: ${props => props.color};
  fontsize: ${props => props.fontsize};
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;
`;

const P = styled.p`
  color: ${props => props.color};
  fontsize: ${props => props.fontsize};
  font-weight: ${props => (props.bold ? 700 : 400)};
  padding-right: ${props => props.padright};
  padding-left: ${props => props.padleft};
  margin-top: ${props => (props.mtop ? props.mtop : "0px")};
  line-height: 24px;
`;

const TextWrap = styled.div`
  text-align: center;
`;

const WrapperContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 8.3333%;
    margin-right: 8.3333%;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <WrapperContainer>
          <Img alt="compass" src={calen} margin="40px 0 24px 0" />
          <TitleWrap>
            <div className="col-xs-10">
              <Title>Лучшие цены на авиабилеты за последний месяц</Title>
            </div>
          </TitleWrap>
          <List border>
            <ListTitleBox>
              {" "}
              <Img alt="Россия" src={russian} />
              <ListTitleWrap>
                <ListTitle>Симферополь (Крым)</ListTitle>
                <P fontsize="12px" color="#A0B0B9">
                  КРЫМ
                </P>
              </ListTitleWrap>
            </ListTitleBox>
            <ListTextBox>
              <div className="row">
                <div className="col-xs-8">
                  <ListTextCity>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Новосибирска</P>
                    <P>Из Екатеринбурга</P>
                    <P>Из Челябинска</P>
                  </ListTextCity>
                </div>
                <div className="col-xs-4">
                  <ListTextPrices>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 4 813 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 7 857 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 15 127 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 275 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 148 ₽
                      </Link>
                    </P>
                  </ListTextPrices>
                </div>
              </div>
            </ListTextBox>
          </List>
          <List border>
            <ListTitleBox>
              {" "}
              <Img alt="Россия" src={armenia} />
              <ListTitleWrap>
                <ListTitle>Ереван</ListTitle>
                <P fontsize="12px" color="#A0B0B9">
                  АРМЕНИЯ
                </P>
              </ListTitleWrap>
            </ListTitleBox>
            <ListTextBox>
              <div className="row">
                <div className="col-xs-8">
                  <ListTextCity>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Сочи</P>
                    <P>Из Краснодара</P>
                    <P>Из Ростова-на-Дону</P>
                  </ListTextCity>
                </div>
                <div className="col-xs-4">
                  <ListTextPrices>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 4 813 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 7 857 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 15 127 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 275 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 148 ₽
                      </Link>
                    </P>
                  </ListTextPrices>
                </div>
              </div>
            </ListTextBox>
          </List>
          <List>
            <ListTitleBox>
              {" "}
              <Img alt="Россия" src={moldova} />
              <ListTitleWrap>
                <ListTitle>Кишинёв</ListTitle>
                <P fontsize="12px" color="#A0B0B9">
                  Молдавия
                </P>
              </ListTitleWrap>
            </ListTitleBox>
            <ListTextBox>
              <div className="row">
                <div className="col-xs-8">
                  <ListTextCity>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Краснодара</P>
                    <P>Из Сургута</P>
                    <P>Из Нового Уренгоя</P>
                  </ListTextCity>
                </div>
                <div className="col-xs-4">
                  <ListTextPrices>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 4 813 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 7 857 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 15 127 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 275 ₽
                      </Link>
                    </P>
                    <P>
                      <Link href="#" color="#00BAE8">
                        от 9 148 ₽
                      </Link>
                    </P>
                  </ListTextPrices>
                </div>
              </div>
            </ListTextBox>
          </List>
          <TextWrap>
            <P padleft="16px" padright="16px">
              {" "}
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </P>
            <P mtop="24px" fontsize="14px" color="#A0B0B9">
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </P>
          </TextWrap>
        </WrapperContainer>
      </div>
    </Section>
  );
}
