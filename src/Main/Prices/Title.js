import React from "react";
import styled from "styled-components";
import calen from "./calen.png";

const Title = styled.h2`
  text-align: center;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  margin: 40px 0 24px 0;
`;

export default function() {
  return (
    <div>
      <Img alt="Компас" src={calen} />
      <TitleWrap>
        <Title>Лучшие цены на авиабилеты за последний месяц</Title>
      </TitleWrap>
    </div>
  );
}
