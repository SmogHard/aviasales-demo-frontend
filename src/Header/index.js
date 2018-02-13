import React from "react";
import styled from "styled-components";
import logo from "./logo.png";
import aero from "./aero.svg";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";

const Logo = styled.img``;

const LogoWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 12px;
`;

const Img = styled.img`
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
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
`;

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

const InputBox = styled.div`
  border-top-left-radius: ${props => props.radiustop};
  border-top-right-radius: ${props => props.radiustop};
  border-bottom-left-radius: ${props => props.radiusbottom};
  border-bottom-right-radius: ${props => props.radiusbottom};
  display: flex;
  align-items: center;
  background: #fff;
  margin-top: 2px;
  margin-left: ${props => props.marginleft};
  margin-right: ${props => props.marginright};
  @media (min-width: 768px) {
    margin-left: -7px;
    margin-right: -7px;
  }
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
`;

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  margin-right: 16px;
  outline: none;
  cursor: pointer;
`;

const ButtonPass = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  margin-top: 2px;
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;
  border-top-left-radius: ${props => props.radiustop};
  border-top-right-radius: ${props => props.radiustop};
  border-bottom-left-radius: ${props => props.radiusbottom};
  border-bottom-right-radius: ${props => props.radiusbottom};
  &:after {
    content: "";
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 88px;
`;

const Span = styled.span`
  color: ${props => props.color};
  margin-left: ${props => props.marginleft};
  display: ${props => (props.xshide ? "none" : "inline-block")};
  font-size: ${props => props.fontsize};
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const WrapperContainer = styled.div`
  @media (min-width: 768px) {
    margin-left: 8.3333%;
    margin-right: 8.3333%;
  }
`;

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <LogoWrap>
              <Logo alt="logo" src={logo} />
              <Span color="#ffffff" marginleft="12px" fontsize="20px" xshide>
                aviasales
              </Span>
            </LogoWrap>
          </div>
        </div>
        <Title>Поиск дешевых авиабилетов</Title>
        <WrapperContainer>
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-3">
              <InputBox radiustop="2px">
                <Input
                  type="text"
                  name="from"
                  placeholder="Укажите город"
                  defaultValue="Москва"
                />
                <Span color="#4a4a4a">MOV</Span>
                <ButtonAction>
                  <Img alt="arrow" src={arrow} />
                </ButtonAction>
              </InputBox>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-2">
              <InputBox>
                <Input
                  type="text"
                  name="to"
                  placeholder="Город прибытия"
                  defaultValue=""
                />
              </InputBox>
            </div>
            <div className="col-xs-6 col-md-3 col-lg-2">
              <InputBox marginright="-7px">
                <Input
                  date
                  type="text"
                  name="dtfrom"
                  placeholder="Туда"
                  defaultValue=""
                />
                <ButtonAction>
                  <Img alt="calendar" src={calendar} />
                </ButtonAction>
              </InputBox>
            </div>
            <div className="col-xs-6 col-md-3 col-lg-2">
              <InputBox marginleft="-7px">
                <Input
                  date
                  type="text"
                  name="dtto"
                  placeholder="Обратно"
                  defaultValue=""
                />
                <ButtonAction>
                  <Img alt="calendar" src={calendar} />
                </ButtonAction>
              </InputBox>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
              <InputBox radiusbottom="2px">
                <ButtonPass radiusbottom="2px">
                  <span>
                    1 пассажир, <Span color="#4a4a4a">эконом</Span>
                  </span>
                </ButtonPass>
              </InputBox>
            </div>
            <div className="col-xs-12 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-5">
              <Box>
                <ButtonSearch>
                  Найти билеты <Img alt="aero" src={aero} marginleft="16px" />
                </ButtonSearch>
              </Box>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </Header>
  );
}
