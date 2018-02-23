import React from "react";
import styled from "styled-components";
import Title from "./TitleFilter";
import arrow_open from "./arrow-open.svg";
import checked from "./checked.png";
import no_check from "./no-check.png";

const Airlines = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
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

const CheckboxTitle = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  padding-top: 16px;
`;

const Information = styled.p`
  font-size: 12px;
`;

const alliance = [
  {
    checked: true,
    label: "Все",
    price: ""
  },
  {
    checked: true,
    label: "One World",
    price: "7 712 ₽"
  },
  {
    checked: true,
    label: "Star Alliance",
    price: "11 712 ₽"
  },
  {
    checked: true,
    label: "Sky Dream",
    price: "23 712 ₽"
  }
];

const airlines = [
  {
    checked: true,
    label: "Все",
    price: ""
  },
  {
    checked: true,
    label: "Custom Company",
    price: "7 712 ₽"
  },
  {
    checked: true,
    label: "Air Algerie",
    price: "11 712 ₽"
  },
  {
    checked: true,
    label: "Alitalia",
    price: "23 712 ₽"
  },
  {
    checked: true,
    label: "Bulgaria Air",
    price: "47 712 ₽"
  },
  {
    checked: true,
    label: "Belle Air",
    price: "47 712 ₽"
  },
  {
    checked: true,
    label: "Air Moldova",
    price: "47 712 ₽"
  },
  {
    checked: true,
    label: "British",
    price: "47 712 ₽"
  }
];
export default function() {
  return (
    <Airlines>
      <Title title="Авиакомпании" arrow={arrow_open} amount="42" />
      <Wrapper>
        <Checkboxes>
          <Checkbox>
            <Check src={no_check} />
            <Text>Несколько авиакомпаний</Text>
          </Checkbox>
        </Checkboxes>
      </Wrapper>
      <Information>
        Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями,
        включая выбранную
      </Information>
      <Wrapper>
        <CheckboxTitle>Альянсы</CheckboxTitle>
        {alliance.map((item, i) => (
          <Checkboxes key={i}>
            <Checkbox>
              <Check src={item.checked ? checked : no_check} />
              <Text>{item.label}</Text>
            </Checkbox>
            <Price> {item.price}</Price>
          </Checkboxes>
        ))}
      </Wrapper>
      <Wrapper>
        <CheckboxTitle>Авиакомпании</CheckboxTitle>
        {airlines.map((item, i) => (
          <Checkboxes key={i}>
            <Checkbox>
              <Check src={item.checked ? checked : no_check} />
              <Text>{item.label}</Text>
            </Checkbox>
            <Price> {item.price}</Price>
          </Checkboxes>
        ))}
      </Wrapper>
    </Airlines>
  );
}
