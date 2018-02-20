import React from "react";
import styled from "styled-components";
import Tickets from "./Tickets";
import settings from "./settings.png";
const Section = styled.section`
  background: #eaeaea;
  @media (min-width: 992px) {
    padding: 16px;
  }
`;

const Settings = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    display: none;
  }
`;

const Button = styled.button`
  background: #23a9f6;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 0;
  cursor: pointer;
  display: flex;
`;

const Icon = styled.img`
  padding: 17px 24px;
`;

const ShowMore = styled.button`
  background: #23a9f6;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  padding-top: 18px;
  padding-bottom: 19px;
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <Settings>
          <Button>
            <Icon src={settings} />
          </Button>
        </Settings>
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
        <ShowMore> Показать еще 10 билетов! </ShowMore>
      </div>
    </Section>
  );
}
