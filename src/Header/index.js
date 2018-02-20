import React from "react";
import styled from "styled-components";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

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
  padding-top: 12px;
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <Route path="/" exact component={MainPage} />
        <Route path="/search" exact component={SearchPage} />
      </div>
    </Header>
  );
}
