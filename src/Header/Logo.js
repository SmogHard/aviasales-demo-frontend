import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <Img alt="Логотип" src={logo} />
      </Link>
      <Text>aviasales</Text>
    </Logo>
  );
}
