import React from "react";
import styled from "styled-components";
import aero from "./aero.svg";
import { Link } from "react-router-dom";

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 88px;
`;

const Img = styled.img`
  margin-left: 23px;
`;

const Submit = styled(Link)`
  border-radius: 4px;
  text-decoration: none;
  font-size: 28px;
  line-height: 33px;
  font-weight: 900;
  background: #ff9241;
  border: none;
  color: #ffffff;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    background: #fca15f;
  }
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 33%;
  }
`;

export default function() {
  return (
    <Search>
      <Submit to="/search">
        Найти билеты <Img alt="Самолет" src={aero} />
      </Submit>
    </Search>
  );
}
