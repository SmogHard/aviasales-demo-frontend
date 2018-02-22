import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  position: relative;
  display: flex;
  font-size: 14px;
  text-transform: uppercase;
  align-items: center;
  font-weight: 500;
  padding-left: 6px;
  color: #5b5b5c;
`;

const Arrow = styled.img`
  margin-right: 4px;
`;

export default function(props) {
  return (
    <Title>
      <Arrow src={props.arrow} />
      {props.title}
    </Title>
  );
}
