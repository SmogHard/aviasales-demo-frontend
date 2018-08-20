import React from 'react';
import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';
import back from './back.svg';

const HeaderSearchXs = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px;
`;

const TextWrap = styled.div`
  color: #ffffff;
  flex: 1 1 auto;
  padding: 0 8px 0 24px;
`;

const Back = styled.button`
  height: 16px;
  width: 16px;
  border: none;
  cursor: pointer;
  background: url(${back});
  flex: 0 0 auto;
`;

const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px;
`;

const Route = Text.extend``;

const DatePax = Text.extend`
  font-size: 12px;
`;

const Currency = styled.button`
  background: none;
  border: 1px white solid;
  cursor: pointer;
  color: white;
  padding: 8px 12px;
  border-radius: 24px;
  flex: 0 0 auto;
`;

export default () => (
  <HeaderSearchXs>
    <LinkStyled to="/">
      <Back />
    </LinkStyled>
    <TextWrap>
      <Route>Москва - Барселона</Route>
      <DatePax>24 фев - 3 март, 1 пассажир</DatePax>
    </TextWrap>
    <Currency> RUB </Currency>
  </HeaderSearchXs>
);
