import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './../../SearchForms/Logo';
import HeaderSearchMobile from './HeaderSearchMobile';
import ButtonPassenger from './../../SearchForms/ButtonPassenger';
import DatePicker from './../../SearchForms/DateInputs';
import DepartAndArrival from './../../SearchForms/DepartAndArrival';
import ButtonSearch from './../../SearchForms/ButtonSearch';

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

const Wrapper = styled.div`
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
    flex-basis: 100%;
  }
  @media (min-width: 1200px) {
    flex-basis: 33.33333%;
  }
`;

const Buttons = styled.div`
  flex: 1;
  display: flex;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-basis: 45%;
`;

const ButtonWrapPass = styled.div`
  flex-basis: 55%;
  margin-right: 1px;
  @media (min-width: 1200px) {
    margin-right: 20px;
  }
`;

const DateLayout = styled.div`
  flex-basis: 50%;
  @media (min-width: 1200px) {
    flex-basis: 30%;
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
      <SearchPage>
        <Wrapper>
          <Logo />
          <Currency>RUB </Currency>
        </Wrapper>
        <div className="row">
          <div className="col-xs-12">
            <Inputs>
              <Layout>
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
              </Layout>
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
              <Buttons>
                <ButtonWrapPass>
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
                </ButtonWrapPass>
                <ButtonWrap>
                  <ButtonSearch />
                </ButtonWrap>
              </Buttons>
            </Inputs>
          </div>
        </div>
      </SearchPage>
      <SearchPageXs>
        <HeaderSearchMobile />
      </SearchPageXs>
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
