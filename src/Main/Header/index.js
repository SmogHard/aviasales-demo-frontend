import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonSearch from './../../SearchForms/ButtonSearch';
import Logo from './../../SearchForms/Logo';
import ButtonPassenger from './../../SearchForms/ButtonPassenger';
import DatePicker from './../../SearchForms/DateInputs';
import DepartAndArrival from './../../SearchForms/DepartAndArrival';

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
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  margin-top: 47px;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 1200px) {
    margin-top: 218px;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding-bottom: 88px;
  flex-basis: 50%;
`;
const TextHiddenXs = styled.p`
  display: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 35%;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 48px;
  }
`;

const Layout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 20.6666%;
  }
`;

const Cities = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
  @media (min-width: 1200px) {
    flex-basis: 41%;
  }
`;

const DateLayout = styled.div`
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
  @media (min-width: 1200px) {
    flex-basis: 38%;
  }
`;

const Menu = ({
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
  <Header>
    <div className="container">
      <Logo />
      <Title>Поиск дешевых авиабилетов</Title>
      <TextHiddenXs>Лучший способо купить авиабилеты дешево</TextHiddenXs>
      <div className="row">
        <div className="col-xs-12 col-md-offset-1 col-md-10">
          <Inputs>
            <Cities>
              <DepartAndArrival
                departIsOpen={departIsOpen}
                arrivalIsOpen={arrivalIsOpen}
                depart={depart}
                arrival={arrival}
                handleChange={handleChange}
                handleCityChange={handleCityChange}
                handleSwap={handleSwap}
                onClickOutside={onClickOutside}
              />
            </Cities>
            <DateLayout>
              <DatePicker
                from={from}
                to={to}
                isOpenFrom={isOpenFrom}
                isOpenTo={isOpenTo}
                setDay={setDay}
                showDate={showDate}
                onClickOutside={onClickOutside}
                clearDate={clearDate}
              />
            </DateLayout>
            <Layout>
              <ButtonPassenger
                passenger={passenger}
                adults={adults}
                kids={kids}
                baby={baby}
                bussines={bussines}
                onToogle={onToogle}
                isOpen={isOpenPassenger}
                handleChangeGrade={handleChangeGrade}
                handleCount={handleCount}
                onClickOutside={onClickOutside}
                category={category}
              />
            </Layout>
          </Inputs>
          <Search>
            <Wrapper>
              <ButtonSearch />
            </Wrapper>
          </Search>
        </div>
      </div>
    </div>
  </Header>
);
export default Menu;

Menu.defaultProps = {
  from: null,
  to: null,
};

Menu.propTypes = {
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
