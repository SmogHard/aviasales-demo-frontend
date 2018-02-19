import React from "react";
import styled from "styled-components";
import avia_russia from "./avia-russia.png";
import share from "./share.png";
import Trip from "./Trip";

const Flight = styled.div`
  flex-basis: 66.6666%;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Company = styled.img`
  width: 99px;
  height: 36px;
`;

const InfoAndShare = styled.div`
  display: flex;
  align-items: center;
`;

const Type = styled.button`
  background: transparent;
  border: 1px solid #2196f3;
  color: #2196f3;
  font-size: 10px;
  line-height: 18px;
  padding: 4px 11px;
  border-radius: 15px;
  margin-right: 15px;
`;

const Share = styled.img`
  margin-right: 10px;
  width: 17px;
  height: 14px;
`;

const Trips = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function() {
  return (
    <Flight>
      <Header>
        <Company src={avia_russia} alt="Авиакомпания Россия" />
        <InfoAndShare>
          <Type> Чартер </Type>
          <Share src={share} />
        </InfoAndShare>
      </Header>
      <Trips>
        <Trip />
        <Trip />
      </Trips>
    </Flight>
  );
}
