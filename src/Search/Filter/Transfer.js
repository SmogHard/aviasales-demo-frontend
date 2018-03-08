import React from 'react';
import styled from 'styled-components';
import arrowOpen from './arrow-open.svg';
import clear from './clear.svg';
import Checkbox from './../../Common/Checkbox';
import Title from './TitleFilter';

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
    label: 'Все',
    id: 1,
  },
  {
    checked: true,
    label: 'Без пересадок',
    price: 7712,
    id: 2,
  },
  {
    checked: false,
    label: '1 пересадка',
    price: 11712,
    id: 3,
  },
  {
    checked: false,
    label: '2 пересадки',
    price: 23712,
    id: 4,
  },
  {
    checked: false,
    label: '3 пересадки',
    price: 47712,
    id: 5,
  },
];

export default () => (
  <Transfer>
    <Header>
      <Title arrow={arrowOpen} title="Пересадки" />
      <Clear src={clear} alt="Сбросить фильтр" />
    </Header>
    {data.map(item => <Checkbox data={item} key={item.id} />)}
  </Transfer>
);
