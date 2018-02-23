import React from "react";
import styled from "styled-components";
import arrow_open from "./arrow-open.svg";
import clear from "./clear.svg";
import Checkbox from "./Checkbox";
import Title from "./TitleFilter";

const Transfer = styled.div`
  padding: 16px 16px;
`;

const Clear = styled.img`
  position: absolute;
  right: 0;
  top: -5px;
`;

const Header = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const data = [
  {
    checked: false,
    label: "Все",
    price: ""
  },
  {
    checked: true,
    label: "Без пересадок",
    price: "7 712 ₽"
  },
  {
    checked: false,
    label: "1 пересадка",
    price: "11 712 ₽"
  },
  {
    checked: false,
    label: "2 пересадки",
    price: "23 712 ₽"
  },
  {
    checked: false,
    label: "3 пересадки",
    price: "47 712 ₽"
  }
];

export default () => {
  return (
    <Transfer>
      <Header>
        <Title arrow={arrow_open} title="Пересадки" />
        <Clear src={clear} alt="Сбросить фильтр" />
      </Header>
      {data.map((item, i) => <Checkbox data={item} key={i} />)}
    </Transfer>
  );
};
