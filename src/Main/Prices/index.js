import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Info from './Info';
import russian from './flagru.png';
import moldova from './flagmd.png';
import armenia from './flagam.png';

const Section = styled.section`
  background: linear-gradient(to bottom, #f8fcff 0%, #ffffff 100%);
  text-align: center;
`;

const Img = styled.img``;

const TicketPrices = styled.div`
  margin-top: 40px;
  padding-bottom: 24px;
  border-bottom: 1px dashed #afbec6;

  @media (min-width: 1200px) {
    flex-basis: 33.3333%;
    padding-right: 34px;
    padding-left: 34px;
    border-bottom: 0px;
    border-right: 1px dashed #afbec6;
    padding-bottom: 0px;
    margin-bottom: 24px;
  }

  &:last-child {
    border: 0;
    padding-right: 0px;
    margin-bottom: 0px;
  }
  &:first-child {
    padding-left: 0px;
  }
`;

const CityTo = styled.h2`
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 0px;
`;

const Destination = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.div`
  text-align: left;
`;

const CityFrom = styled.div`
  text-align: left;
  font-size: 16px;
  color: #4a4a4a;
`;

const Prices = styled.div`
  text-align: right;
`;

const Offers = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkStyled = styled.a`
  color: #00bae8;
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;
`;

const Text = styled.p`
  line-height: 24px;
`;

const Country = Text.extend`
  font-size: 12px;
  color: #a0b0b9;
  text-transform: uppercase;
  line-height: 20px;
  font-weight: 500;
  margin: 0px;
`;

const PopularDirections = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default function () {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Title />
            <PopularDirections>
              <TicketPrices>
                <Destination>
                  <Img alt="Россия" src={russian} />
                  <Description>
                    <CityTo>Симферополь (Крым)</CityTo>
                    <Country>КРЫМ</Country>
                  </Description>
                </Destination>
                <Offers>
                  <CityFrom>
                    <Text>Из Москвы</Text>
                    <Text>Из Санкт-Петербурга</Text>
                    <Text>Из Новосибирска</Text>
                    <Text>Из Екатеринбурга</Text>
                    <Text>Из Челябинска</Text>
                  </CityFrom>
                  <Prices>
                    <Text>
                      <LinkStyled href="#">от 4 813 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 7 857 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 15 127 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 275 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 148 ₽</LinkStyled>
                    </Text>
                  </Prices>
                </Offers>
              </TicketPrices>
              <TicketPrices>
                <Destination>
                  <Img alt="Россия" src={armenia} />
                  <Description>
                    <CityTo>Ереван</CityTo>
                    <Country>АРМЕНИЯ</Country>
                  </Description>
                </Destination>
                <Offers>
                  <CityFrom>
                    <Text>Из Москвы</Text>
                    <Text>Из Санкт-Петербурга</Text>
                    <Text>Из Сочи</Text>
                    <Text>Из Краснодара</Text>
                    <Text>Из Ростова-на-Дону</Text>
                  </CityFrom>
                  <Prices>
                    <Text>
                      <LinkStyled href="#">от 4 813 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 7 857 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 15 127 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 275 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 148 ₽</LinkStyled>
                    </Text>
                  </Prices>
                </Offers>
              </TicketPrices>
              <TicketPrices>
                <Destination>
                  <Img alt="Россия" src={moldova} />
                  <Description>
                    <CityTo>Кишинёв</CityTo>
                    <Country>Молдавия</Country>
                  </Description>
                </Destination>
                <Offers>
                  <CityFrom>
                    <Text>Из Москвы</Text>
                    <Text>Из Санкт-Петербурга</Text>
                    <Text>Из Краснодара</Text>
                    <Text>Из Сургута</Text>
                    <Text>Из Нового Уренгоя</Text>
                  </CityFrom>
                  <Prices>
                    <Text>
                      <LinkStyled href="#">от 4 813 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 7 857 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 15 127 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 275 ₽</LinkStyled>
                    </Text>
                    <Text>
                      <LinkStyled href="#">от 9 148 ₽</LinkStyled>
                    </Text>
                  </Prices>
                </Offers>
              </TicketPrices>
            </PopularDirections>
            <Info />
          </div>
        </div>
      </div>
    </Section>
  );
}
