import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CityFrom from './CityFrom';
import CityTo from './CityTo';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const data = [
  {
    city: 'Barselona',
    country: 'Spain',
    abbr: 'BAR',
    id: 0,
  },
  {
    city: 'Moscow',
    country: 'Russia',
    abbr: 'MOW',
    id: 1,
  },
  {
    city: 'Berlin',
    country: 'Germany',
    abbr: 'BER',
    id: 2,
  },
  {
    city: 'Pekin',
    country: 'China',
    abbr: 'PEK',
    id: 3,
  },
];

const DepartAndArrival = ({
  departIsOpen,
  arrivalIsOpen,
  depart,
  arrival,
  handleChange,
  handleCityChange,
  handleSwap,
  onClickOutside,
}) => (
  <Wrapper>
    <CityFrom
      isOpen={departIsOpen}
      onClickOutside={onClickOutside}
      data={depart}
      cities={data}
      handleChange={handleChange}
      handleCityChange={handleCityChange}
      handleSwap={handleSwap}
    />
    <CityTo
      isOpen={arrivalIsOpen}
      onClickOutside={onClickOutside}
      data={arrival}
      cities={data}
      handleChange={handleChange}
      handleCityChange={handleCityChange}
    />
  </Wrapper>
);

DepartAndArrival.propTypes = {
  departIsOpen: PropTypes.bool.isRequired,
  arrivalIsOpen: PropTypes.bool.isRequired,
  depart: PropTypes.shape({}).isRequired,
  arrival: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};
export default DepartAndArrival;
