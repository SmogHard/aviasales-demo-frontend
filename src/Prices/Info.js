import React from "react";
import styled from "styled-components";

const Info = styled.div`
  text-align: center;
`;

const TextInfo = styled.p`
  font-size: 16px;
  line-height: 26px;
`;

const AboutPrice = styled.p`
  margin-top: 16px;
  line-height: 20px;
  font-size: 14px;
  color: #a0b0b9;
  margin-bottom: 0px;
`;

export default function() {
  return (
    <div className="row">
      <div className="col-lg-offset-2 col-lg-8">
        <Info>
          <TextInfo>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </TextInfo>
          <AboutPrice>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </AboutPrice>
        </Info>
      </div>
    </div>
  );
}
