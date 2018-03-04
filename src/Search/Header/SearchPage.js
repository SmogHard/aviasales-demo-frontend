import React from "react";
import Inputs from "./Inputs";
import Logo from "./../../Common/Logo";
import styled from "styled-components";
import HeaderSearchMobile from "./HeaderSearchMobile";

const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
`;

const SearchPage = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchPageXs = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
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

export default function() {
  return (
    <div>
      <SearchPage>
        <Header>
          <Logo />
          <Currency>RUB </Currency>
        </Header>
        <div className="row">
          <div className="col-xs-12">
            <Inputs />
          </div>
        </div>
      </SearchPage>
      <SearchPageXs>
        <HeaderSearchMobile />
      </SearchPageXs>
    </div>
  );
}
