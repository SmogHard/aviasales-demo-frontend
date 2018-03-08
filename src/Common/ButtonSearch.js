import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import aero from './aero.svg';

const Img = styled.img`
  margin-left: 23px;
`;

const SubmitMain = styled(Link)`
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

const SubmitSearch = SubmitMain.extend`
  flex-basis: 50%;
  font-size: 18px;
  text-decoration: none;
  line-height: 24px;
  min-width: 100%;
  margin-top: 1px;
  margin-bottom: 1px;
  text-align: center;
  @media (min-width: 1200px) {
    border-radius: 4px;
  }
`;

const ButtonMain = () => (
  <SubmitMain to="/search">
    Найти билеты <Img alt="Самолет" src={aero} />
  </SubmitMain>
);

const ButtonSearch = () => <SubmitSearch to="/search">Найти билеты</SubmitSearch>;

const Wrapper = styled.div`
  width: 100%;
`;

export default function () {
  return (
    <Wrapper>
      <Route exact path="/" render={ButtonMain} />
      <Route exact path="/search" render={ButtonSearch} />
    </Wrapper>
  );
}
