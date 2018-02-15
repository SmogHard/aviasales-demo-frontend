import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";
import pen from "./pen.png";

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img``;

const TitleLogo = Img.extend`
  margin: 40px 0 24px 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  color: #00ace2;
`;

const Wrapper = styled.div``;

export default function() {
  return (
    <Wrapper>
      <TitleLogo alt="Лого" src={compass} />
      <TitleWrap>
        <Title>
          Популярные направления перелетов из города
          <Button>
            Москва <Img alt="Карандаш" src={pen} />
          </Button>
        </Title>
      </TitleWrap>
    </Wrapper>
  );
}
