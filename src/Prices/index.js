import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Info from "./Info";
import russian from "./flagru.png";
import moldova from "./flagmd.png";
import armenia from "./flagam.png";

const Section = styled.section`
  background: linear-gradient(to bottom, #f8fcff 0%, #ffffff 100%);
  text-align: center;
`;

const Img = styled.img``;

const List = styled.div`
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

const ListTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 0px;
`;

const Place = styled.div`
  display: flex;
  align-items: center;
`;

const PlaceNameWrap = styled.div`
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

const Link = styled.a`
  color: #00bae8;
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;
`;

const P = styled.p`
  line-height: 24px;
`;

const PlaceName = P.extend`
  font-size: 12px;
  color: #a0b0b9;
  text-transform: uppercase;
  line-height: 20px;
  font-weight: 500;
  margin: 0px;
`;

const OffersWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Title />
            <OffersWrap>
              <List>
                <Place>
                  <Img alt="Россия" src={russian} />
                  <PlaceNameWrap>
                    <ListTitle>Симферополь (Крым)</ListTitle>
                    <PlaceName>КРЫМ</PlaceName>
                  </PlaceNameWrap>
                </Place>
                <Offers>
                  <CityFrom>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Новосибирска</P>
                    <P>Из Екатеринбурга</P>
                    <P>Из Челябинска</P>
                  </CityFrom>
                  <Prices>
                    <P>
                      <Link href="#">от 4 813 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 7 857 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 15 127 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 275 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 148 ₽</Link>
                    </P>
                  </Prices>
                </Offers>
              </List>
              <List>
                <Place>
                  <Img alt="Россия" src={armenia} />
                  <PlaceNameWrap>
                    <ListTitle>Ереван</ListTitle>
                    <PlaceName>АРМЕНИЯ</PlaceName>
                  </PlaceNameWrap>
                </Place>
                <Offers>
                  <CityFrom>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Сочи</P>
                    <P>Из Краснодара</P>
                    <P>Из Ростова-на-Дону</P>
                  </CityFrom>
                  <Prices>
                    <P>
                      <Link href="#">от 4 813 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 7 857 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 15 127 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 275 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 148 ₽</Link>
                    </P>
                  </Prices>
                </Offers>
              </List>
              <List>
                <Place>
                  <Img alt="Россия" src={moldova} />
                  <PlaceNameWrap>
                    <ListTitle>Кишинёв</ListTitle>
                    <PlaceName>Молдавия</PlaceName>
                  </PlaceNameWrap>
                </Place>
                <Offers>
                  <CityFrom>
                    <P>Из Москвы</P>
                    <P>Из Санкт-Петербурга</P>
                    <P>Из Краснодара</P>
                    <P>Из Сургута</P>
                    <P>Из Нового Уренгоя</P>
                  </CityFrom>
                  <Prices>
                    <P>
                      <Link href="#">от 4 813 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 7 857 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 15 127 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 275 ₽</Link>
                    </P>
                    <P>
                      <Link href="#">от 9 148 ₽</Link>
                    </P>
                  </Prices>
                </Offers>
              </List>
            </OffersWrap>
            <Info />
          </div>
        </div>
      </div>
    </Section>
  );
}
