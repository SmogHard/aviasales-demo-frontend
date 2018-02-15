import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const Logo = styled.img``;

const LogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 12px;
`;

const Span = styled.span`
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
    <LogoWrap>
      <Logo alt="logo" src={logo} />
      <Span xshide>aviasales</Span>
    </LogoWrap>
  );
}
