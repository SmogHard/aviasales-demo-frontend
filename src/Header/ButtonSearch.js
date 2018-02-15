import React from "react";
import styled from "styled-components";
import aero from "./aero.svg";

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 88px;
`;

const Img = styled.img`
  margin-left: 16px;
`;

const ButtonSearch = styled.button`
  color: #ffffff;
  background: #ff9241;
  font-size: 24px;
  border: 0px;
  line-height: 28px;
  padding-top: 14px;
  padding-bottom: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 2px;
  font-weight: 900;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export default function() {
  return (
    <Box>
      <ButtonSearch>
        Найти билеты <Img alt="aero" src={aero} />
      </ButtonSearch>
    </Box>
  );
}
