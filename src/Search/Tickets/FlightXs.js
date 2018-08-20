import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from 'styled-components';
import Duration from './../../SearchForms/Duration';
import clock from './clock.svg';

const Wrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 6px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.img`
  padding-right: 8px;
`;

const Transfers = styled.div`
  text-align: right;
  flex-basis: 20%;
`;

const Total = styled.div`
  flex-basis: 30%;
`;

const Time = styled.div`
  flex-basis: 50%;
`;

const Flight = ({ flight, icon }) => {
  const takeOffAt = format(new Date(flight.dateFrom), 'HH:MM');

  const landingAt = format(new Date(flight.dateTo), 'HH:MM');

  return (
    <Wrapper>
      <Time>
        <Icon src={icon} />
        {takeOffAt} - {landingAt}
      </Time>
      <Total>
        <Icon src={clock} />
        <Duration duration={flight.timeOfFlight} />
      </Total>
      <Transfers>{flight.transfer ? flight.transfer : 'Прямой'}</Transfers>
    </Wrapper>
  );
};

Flight.propTypes = {
  flight: PropTypes.shape({}).isRequired,
  icon: PropTypes.string.isRequired,
};
export default Flight;
