import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  flex-basis: 50%;

  font-size: 18px;
  line-height: 24px;
  font-weight: 900;
  background: #ff9241;
  border: none;
  color: #ffffff;
  padding: 16px;
  width: 100%;
  margin-top: 1px;

  box-sizing: border-box;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fca15f;
  }

  @media (min-width: 992px) {
    padding-left: 30px;
    border-radius: 4px;
  }
`;

export default function() {
  return (
    <Link to="/search">
      <Button>Найти билеты</Button>
    </Link>
  );
}
