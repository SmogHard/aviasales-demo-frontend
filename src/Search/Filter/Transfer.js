import React from "react";
import styled from "styled-components";
import arrow_open from "./arrow-open.svg";
import clear from "./clear.svg";
import checked from "./checked.png";
import no_check from "./no-check.png";
import Title from "./TitleFilter";

const Transfer = styled.div`
  padding: 6px 8px;
`;

const Clear = styled.img`
  position: absolute;
  right: 0;
  top: -10px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #4a4a4a;
`;

const Price = styled.p`
  font-size: 12px;
  color: #a0b0b9;
`;

const Check = styled.img``;

const Text = styled.p`
  padding-left: 6px;
  margin: 0;
`;

const Header = styled.div`
  position: relative;
`;

const Checkboxes = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
  color: #4a4a4a;
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
      {data.map((item, i) => (
        <Checkboxes key={i}>
          <Checkbox>
            <Check src={item.checked ? checked : no_check} />
            <Text>{item.label}</Text>
          </Checkbox>
          <Price> {item.price}</Price>
        </Checkboxes>
      ))}
    </Transfer>
  );
};
