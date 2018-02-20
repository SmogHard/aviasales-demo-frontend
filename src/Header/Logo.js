import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const Img = styled.img``;

const Logo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Text = styled.span`
  color: #ffffff;
  margin-left: 12px;
  display: none;
  font-size: 20px;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export default function() {
  return (
    <Logo>
      <Img alt="Логотип" src={logo} />
      <Text>aviasales</Text>
    </Logo>
  );
}
