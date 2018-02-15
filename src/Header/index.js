import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";
import ButtonSearch from "./ButtonSearch";

const Header = styled.header`
  background: linear-gradient(
    to bottom,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  margin-top: 47px;
  font-weight: 700;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Logo />
        <Title>Поиск дешевых авиабилетов</Title>
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10">
            <Form />
            <ButtonSearch />
          </div>
        </div>
      </div>
    </Header>
  );
}
