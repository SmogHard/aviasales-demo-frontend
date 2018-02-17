import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Inputs from "./Inputs";
import ButtonSearch from "./ButtonSearch";

const Header = styled.header`
  background: linear-gradient(
    to bottom,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  margin-top: 47px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const TextHiddenXs = styled.p`
  display: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Logo />
        <Title>Поиск дешевых авиабилетов</Title>
        <TextHiddenXs>Лучший способо купить авиабилеты дешево</TextHiddenXs>
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10">
            <form>
              <Inputs />
              <ButtonSearch />
            </form>
          </div>
        </div>
      </div>
    </Header>
  );
}
