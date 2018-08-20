import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Directions from './Directions';
import Prices from './Prices';
import Promotions from './Promotions';
import Faq from './Faq';
import Download from './Download';
import Slider from './Slider';
import Subscribe from './Subscribe';

const Main = ({
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
  <div className="main">
    <Helmet>
      <title>Главная</title>
    </Helmet>
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
    <Directions />
    <Prices />
    <Slider />
    <Subscribe />
    <Promotions />
    <Faq />
    <Download />
  </div>
);

Main.defaultProps = {
  from: null,
  to: null,
};

Main.propTypes = {
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
export default Main;
