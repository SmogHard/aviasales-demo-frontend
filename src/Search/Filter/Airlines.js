import React from 'react';
import styled from 'styled-components';
import Title from './TitleFilter';
import arrowOpen from './arrow-open.svg';
import Checkbox from './../../Common/Checkbox';

const Airlines = styled.div`
  padding: 16px 16px;
  border-top: 1px solid #dddddd;
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
    label: 'Все',
    price: undefined,
    id: 1,
  },
  {
    checked: true,
    label: 'One World',
    price: 7712,
    id: 2,
  },
  {
    checked: true,
    label: 'Star Alliance',
    price: 11712,
    id: 3,
  },
  {
    checked: true,
    label: 'Sky Dream',
    price: 23712,
    id: 4,
  },
];

const airlines = [
  {
    checked: true,
    label: 'Все',
    id: 1,
  },
  {
    checked: true,
    label: 'Custom Company',
    price: 7712,
    id: 2,
  },
  {
    checked: true,
    label: 'Air Algerie',
    price: 11712,
    id: 3,
  },
  {
    checked: true,
    label: 'Alitalia',
    price: 23712,
    id: 4,
  },
  {
    checked: true,
    label: 'Bulgaria Air',
    price: 47712,
    id: 5,
  },
  {
    checked: true,
    label: 'Belle Air',
    price: 47712,
    id: 6,
  },
  {
    checked: true,
    label: 'Air Moldova',
    price: 47712,
    id: 7,
  },
  {
    checked: true,
    label: 'British',
    price: 47712,
    id: 8,
  },
];

const several = { checked: true, label: 'Несколько авиакомпаний' };

export default function () {
  return (
    <Airlines>
      <Title title="Авиакомпании" arrow={arrowOpen} amount="42" />
      <Wrapper>
        <Checkbox data={several} />
      </Wrapper>
      <Information>
        Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
      </Information>
      <Wrapper>
        <CheckboxTitle>Альянсы</CheckboxTitle>
        {alliance.map(item => <Checkbox data={item} key={item.id} />)}
      </Wrapper>
      <Wrapper>
        <CheckboxTitle>Авиакомпании</CheckboxTitle>
        {airlines.map(item => <Checkbox data={item} key={item.id} />)}
      </Wrapper>
    </Airlines>
  );
}
