import React from "react";
import styled from "styled-components";
import Tickets from "./Tickets";
import { Helmet } from "react-helmet";
import settings from "./settings.png";
import Header from "./Header";
import Filter from "./Filter";

const Section = styled.section`
  background: #eaeaea;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    padding-bottom: 0px;
  }

  @media (min-width: 1200px) {
    padding: 40px;
  }
`;

const Settings = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Up = styled.p`
  color: #ffffff;
  background: #00ace2;
  padding: 6px 16px;
  margin: 0;
  @media (min-width: 768px) {
    display: none;
  }
  border-radius: 100px;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    background: #23a9f6;
    border-radius: 10px;
    display: flex;
  }
`;

const Icon = styled.img`
  padding: 17px 24px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ShowMore = styled.button`
  display: none;
  background: #23a9f6;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  padding-top: 18px;
  padding-bottom: 19px;

  @media (min-width: 768px) {
    display: block;
  }
`;

const FilterButton = ShowMore.extend`
  display: block;
  width: initial;
  margin: 0 auto;
  border-radius: 100px;
  padding: 10px 24px;
  font-weight: 900;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function() {
  return (
    <div>
      <Header />
      <Section>
        <Helmet>
          <title>Результаты поиска</title>
        </Helmet>
        <div className="container">
          <Settings>
            <Button>
              <Icon src={settings} />
              <Up>Наверх</Up>
            </Button>
          </Settings>
          <div className="row">
            <div className="col-lg-3">
              <Filter />
            </div>
            <div className="col-xs-12 col-xl-7">
              <Tickets />
              <ShowMore> Показать еще 10 билетов! </ShowMore>
              <FilterButton>Фильтровать</FilterButton>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
