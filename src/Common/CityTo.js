import React from 'react';
import styled from 'styled-components';

const CityTo = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  @media (min-width: 768px) {
    border-top-right-radius: 2px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
  }
`;

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  ::placeholder {
    color: #a0b0b9;
  }
`;
export default function () {
  return (
    <CityTo>
      <Input type="text" name="to" placeholder="Город прибытия" defaultValue="" />
    </CityTo>
  );
}
