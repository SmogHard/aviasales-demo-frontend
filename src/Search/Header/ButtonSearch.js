import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonSearch = styled(Link)`
  flex-basis: 50%;
  font-size: 18px;
  text-decoration: none;
  line-height: 23px;
  font-weight: 900;
  background: #ff9241;
  border: none;
  color: #ffffff;
  padding: 16px;
  min-width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fca15f;
  }

  @media (min-width: 1200px) {
    border-radius: 4px;
  }
`;

export default function() {
  return <ButtonSearch to="/search">Найти билеты</ButtonSearch>;
}
