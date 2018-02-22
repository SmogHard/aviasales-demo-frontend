import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import aero from "./aero.svg";

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 88px;
`;

const Img = styled.img`
  margin-left: 16px;
`;

const Button = styled.button`
  border-radius: 4px;
  font-size: 25px;
  font-weight: 900;
  background: #ff9241;
  border: none;
  color: #ffffff;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fca15f;
  }
`;
export default function() {
  return (
    <Search>
      <Link to="/search">
        <Button>
          Найти билеты <Img alt="Самолет" src={aero} />
        </Button>
      </Link>
    </Search>
  );
}
