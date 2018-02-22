import React from "react";
import Inputs from "./Inputs";
import Logo from "./../../Common/Logo";
import styled from "styled-components";
import envelope from "./envelope.png";
import hamburger from "./hamburger.png";
import avatar from "./avatar.png";
import HeaderSearchMobile from "./HeaderSearchMobile";

const Header = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
`;

const Icon = styled.img`
  padding: 12px;
`;

const IconWrapper = styled.button`
  position: relative;
  border-radius: 50%;
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  margin-right: 12px;
  background: transparent;
  cursor: pointer;
  padding: 0;
`;

const MessageCounter = styled.div`
  content: "";
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  color: #ffffff;
  background: #ff6400;
  padding: 2px 6px;
`;

const ToolBar = styled.div`
  display: flex;

  flex-direction: row;
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

export default function() {
  return (
    <div>
      <SearchPage>
        <Header>
          <Logo />
          <ToolBar>
            <IconWrapper>
              <Icon src={envelope} />
            </IconWrapper>
            <IconWrapper>
              <Icon src={avatar} />
              <MessageCounter>1</MessageCounter>
            </IconWrapper>
            <Icon src={hamburger} />
          </ToolBar>
        </Header>
        <div className="row">
          <div className="col-xs-12">
            <form>
              <Inputs />
            </form>
          </div>
        </div>
      </SearchPage>
      <SearchPageXs>
        <HeaderSearchMobile />
      </SearchPageXs>
    </div>
  );
}
