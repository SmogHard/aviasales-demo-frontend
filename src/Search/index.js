import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tickets from './Tickets';
import settings from './settings.png';
import Header from './Header';
import Filter from './Filter';

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

const Search = ({
  from,
  to,
  isOpenFrom,
  isOpenTo,
  setDay,
  showDate,
  onClickOutside,
  clearDate,
  departIsOpen,
  arrivalIsOpen,
  depart,
  arrival,
  handleChange,
  handleCityChange,
  handleSwap,
  passenger,
  adults,
  kids,
  baby,
  bussines,
  onToogle,
  isOpenPassenger,
  handleChangeGrade,
  handleCount,
  category,
}) => (
  <div>
    <Header
      from={from}
      to={to}
      isOpenFrom={isOpenFrom}
      isOpenTo={isOpenTo}
      setDay={setDay}
      showDate={showDate}
      onClickOutside={onClickOutside}
      clearDate={clearDate}
      departIsOpen={departIsOpen}
      arrivalIsOpen={arrivalIsOpen}
      depart={depart}
      arrival={arrival}
      handleChange={handleChange}
      handleCityChange={handleCityChange}
      handleSwap={handleSwap}
      passenger={passenger}
      adults={adults}
      kids={kids}
      baby={baby}
      bussines={bussines}
      onToogle={onToogle}
      isOpenPassenger={isOpenPassenger}
      handleChangeGrade={handleChangeGrade}
      handleCount={handleCount}
      category={category}
    />
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

Search.defaultProps = {
  from: null,
  to: null,
};

Search.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  isOpenFrom: PropTypes.bool.isRequired,
  isOpenTo: PropTypes.bool.isRequired,
  setDay: PropTypes.func.isRequired,
  showDate: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  clearDate: PropTypes.func.isRequired,
  departIsOpen: PropTypes.bool.isRequired,
  arrivalIsOpen: PropTypes.bool.isRequired,
  depart: PropTypes.shape({}).isRequired,
  arrival: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  passenger: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  kids: PropTypes.number.isRequired,
  baby: PropTypes.number.isRequired,
  bussines: PropTypes.bool.isRequired,
  onToogle: PropTypes.func.isRequired,
  isOpenPassenger: PropTypes.bool.isRequired,
  handleChangeGrade: PropTypes.func.isRequired,
  handleCount: PropTypes.func.isRequired,
  category: PropTypes.shape({}).isRequired,
};

export default Search;
