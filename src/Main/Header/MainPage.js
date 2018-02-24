import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import ButtonSearch from "./../../Common/ButtonSearch";
import Logo from "./../../Common/Logo";

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

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 88px;
  flex-basis: 50%;
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

const Wrapper = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

export default function() {
  return (
    <div>
      <Logo />
      <Title>Поиск дешевых авиабилетов</Title>
      <TextHiddenXs>Лучший способо купить авиабилеты дешево</TextHiddenXs>
      <div className="row">
        <div className="col-xs-12 col-md-offset-1 col-md-10">
          <form>
            <Inputs />
            <Search>
              <Wrapper>
                <ButtonSearch />
              </Wrapper>
            </Search>
          </form>
        </div>
      </div>
    </div>
  );
}
