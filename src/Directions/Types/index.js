import React from "react";
import styled from "styled-components";
import world from "./world.svg";
import coctail from "./coctail.svg";
import children from "./children.svg";
import holiday from "./holiday.svg";
import history from "./history.svg";
import shoping from "./shoping.svg";

const Directions = styled.div`
  margin-top: 32px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    margin-bottom: 17px;
  }
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
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

const Img = styled.img`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.1);
  ${Button}:hover & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  ${Button}:focus & {
    box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.1);
  }
  padding: 13px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const IconTitle = styled.p`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  ${Button}:hover & {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
  ${Button}:focus & {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
  }
`;

export default function() {
  return (
    <div className="row center-xs">
      <div className="col-xl-9">
        <Directions>
          <Button>
            <Img alt="Мир" src={world} />
            <IconTitle>
              Куда<br />угодно
            </IconTitle>
          </Button>
          <Button>
            <Img alt="Пальма" src={holiday} />
            <IconTitle>
              Солнце<br />и море
            </IconTitle>
          </Button>
          <Button>
            <Img alt="Корзина" src={shoping} />
            <IconTitle>
              Шопинг,<br />город
            </IconTitle>
          </Button>
          <Button>
            <Img alt="История" src={history} />
            <IconTitle>
              Культура<br />и история
            </IconTitle>
          </Button>
          <Button>
            <Img alt="Коктейль" src={coctail} />
            <IconTitle>
              Ночная<br />жизнь
            </IconTitle>
          </Button>
          <Button>
            <Img alt="Коляска" src={children} />
            <IconTitle>
              Отдых<br />с детьми
            </IconTitle>
          </Button>
        </Directions>
      </div>
    </div>
  );
}
