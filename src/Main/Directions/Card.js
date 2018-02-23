import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover,
  &:focus {
    box-shadow: 2px 8px 14px rgba(0, 75, 93, 0.12);
  }
`;

const CityImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 176px;
  object-fit: cover;
  @media (min-width: 768px) {
    height: 212px;
  }
`;

const InfoAboutRoute = styled.div`
  background: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
`;

const P = styled.p`
  color: #a0b0b9;
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 0px;
  font-weight: 500;
  line-height: 20px;
`;

const CityName = styled.p`
  margin-top: 16px;
  color: #5b5b5c;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0px;
  line-height: 20px;
  @media (min-width: 768px) {
    margin-top: 12px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const LinkText = styled.p`
  margin-top: 19px;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 16px;
  @media (min-width: 768px) {
    margin-top: 12px;
    font-size: 22px;
    line-height: 32px;
  }
`;

const Direction = styled.div`
  background: #ffffff;
  text-align: left;
  display: flex;
  align-items: center;
`;

const PriceAndDate = styled.div`
  background: #ffffff;
  text-align: right;
`;

const Link = styled.a`
  color: #00bae8;
  margin-top: 16px;
  margin-bottom: 16px;
  text-decoration: none;
  transition: color 0.3s ease;
  ${Card}:hover & {
    color: #ff8c00;
  }
`;

const Flag = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 18px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
`;

export default props => {
  return (
    <Card>
      <CityImage src={props.img} alt="Город" />
      <InfoAboutRoute>
        <Direction>
          <Flag src={props.flag} alt="Флаг" />
          <Place>
            <CityName>{props.city}</CityName>
            <P>{props.country}</P>
          </Place>
        </Direction>
        <PriceAndDate>
          <LinkText>
            <Link href="#">Найти от {props.price} ₽</Link>
          </LinkText>
          <P>{props.date}</P>
        </PriceAndDate>
      </InfoAboutRoute>
    </Card>
  );
};