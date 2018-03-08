import React from 'react';
import styled from 'styled-components';
import world from './world.svg';
import coctail from './coctail.svg';
import children from './children.svg';
import holiday from './holiday.svg';
import history from './history.svg';
import shoping from './shoping.svg';

const Directions = styled.div`
  margin-top: 32px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    margin-bottom: 17px;
  }
  display: flex;
  flex-wrap: wrap;
`;

const Direction = styled.button`
  cursor: pointer;
  margin-bottom: 21px;
  justify-content: center;
  background: transparent;
  border: 0;
  outline: none;
  color: #00ace2;
  flex-basis: 33.3333%;
  @media (min-width: 768px) {
    flex-basis: 16.6667%;
  }
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Icon = styled.img`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  ${Direction}:hover & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  ${Direction}:focus & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  padding: 13px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const Name = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  ${Direction}:hover & {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
  ${Direction}:focus & {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
`;

export default function () {
  return (
    <div className="row center-xs">
      <div className="col-xl-9">
        <Directions>
          <Direction>
            <Icon alt="Мир" src={world} />
            <Name>
              Куда<br />угодно
            </Name>
          </Direction>
          <Direction>
            <Icon alt="Пальма" src={holiday} />
            <Name>
              Солнце<br />и море
            </Name>
          </Direction>
          <Direction>
            <Icon alt="Корзина" src={shoping} />
            <Name>
              Шопинг,<br />город
            </Name>
          </Direction>
          <Direction>
            <Icon alt="История" src={history} />
            <Name>
              Культура<br />и история
            </Name>
          </Direction>
          <Direction>
            <Icon alt="Коктейль" src={coctail} />
            <Name>
              Ночная<br />жизнь
            </Name>
          </Direction>
          <Direction>
            <Icon alt="Коляска" src={children} />
            <Name>
              Отдых<br />с детьми
            </Name>
          </Direction>
        </Directions>
      </div>
    </div>
  );
}
