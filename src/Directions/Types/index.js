import React from "react";
import styled from "styled-components";
import world from "./world.svg";
import coctail from "./coctail.svg";
import children from "./children.svg";
import holiday from "./holiday.svg";
import history from "./history.svg";
import shoping from "./shoping.svg";
import TypeDirection from "./Type";

const DirectionList = styled.div`
  margin-top: 32px;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    margin-bottom: 17px;
  }
  display: flex;
  flex-wrap: wrap;
`;

const types = [
  { img: world, text: "Куда угодно", alt: "Мир" },
  { img: holiday, text: "Солнце и море", alt: "Пальма" },
  { img: shoping, text: "Шопинг, город", alt: "Корзина" },
  { img: history, text: "Культура и история", alt: "История" },
  { img: coctail, text: "Ночная жизнь", alt: "Коктейль" },
  { img: children, text: "Отдых с детьми", alt: "Коляска" }
];

export default function() {
  return (
    <div className="row center-xs">
      <div className="col-xl-9">
        <DirectionList>
          {types.map((type, i) => (
            <TypeDirection
              img={type.img}
              text={type.text}
              alt={type.alt}
              key={i}
            />
          ))}
        </DirectionList>
      </div>
    </div>
  );
}
