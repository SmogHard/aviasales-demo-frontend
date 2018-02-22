import React from "react";
import styled from "styled-components";
import air from "./airplane.svg";

const Air = styled.img`
  margin: 0 8px;
`;

const Direction = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: #323333;
  margin: 0;
  margin-top: 24px;
`;

export default function(props) {
  return (
    <Direction>
      {props.cityFrom}
      <Air src={air} alt="air" />
      {props.cityTo}
    </Direction>
  );
}
