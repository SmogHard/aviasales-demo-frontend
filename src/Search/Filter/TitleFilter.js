import React from "react";
import styled from "styled-components";

const Title = styled.p`
  position: relative;
  display: flex;
  font-size: 12px;
  margin: 0px;
  text-transform: uppercase;
  align-items: center;
  font-weight: 500;
  color: #5b5b5c;
`;

const Arrow = styled.img`
  margin-right: 6px;
`;

const Amount = styled.span``;

export default function(props) {
  return (
    <Title>
      <Arrow src={props.arrow} />
      {props.title}
      {props.amount && <Amount> {props.amount} </Amount>}
    </Title>
  );
}
