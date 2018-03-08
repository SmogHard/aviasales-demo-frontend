import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import pin from './pin.svg';
import airUp from './air-up.svg';
import airDown from './air-down.svg';
import dot from './dot.svg';
import line from './line.png';
import { localization } from './data';
import Duration from './../../Common/Duration';

const Wrapper = styled.div`
  display: flex;
`;

const Pin = styled.img`
  margin-right: 8px;
`;

const Time = styled.p`
  font-size: 28px;
  line-height: 40px;
  margin: 0px;
`;

const Clock = styled.div`
  display: flex;
  padding-bottom: 4px;
`;

const From = styled.div`
  flex-basis: 20%;
`;

const To = From.extend`
  justify-content: flex-end;
  text-align: right;
`;

const Day = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #9ca5a8;
  margin: 0px;
`;

const Total = Day.extend``;

const City = Day.extend`
  font-weight: 500;
`;

const TotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 7px;
}
`;

const RoutePath = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  padding-right: 16px;
  padding-top: 8px;
  padding-left: 16px;
`;

const AirIcon = styled.img``;

const Snippet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dot = styled.img``;

const Line = styled.img`
  padding: 2px;
  width: 100%;
  @media (min-width: 1200px) {
    width: initial;
  }
`;

const AirAbbreviation = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #9ca5a8;
  margin: 0px;
`;

const RouteAirPorts = styled.div`
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
`;

const Trip = ({ data }) => {
  const trip = data;

  const dateFrom = format(new Date(trip.dateFrom), 'DD MMM YYYY, dd', {
    locale: ruLocale,
  });

  const dateTo = format(new Date(trip.dateTo), 'DD MMM YYYY, dd', {
    locale: ruLocale,
  });

  const takeOffAt = format(new Date(trip.dateFrom), 'HH:MM');

  const landingAt = format(new Date(trip.dateTo), 'HH:MM');

  return (
    <Wrapper>
      <From>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> {takeOffAt} </Time>
        </Clock>
        <City>{localization.city[trip.cityFrom]}</City>
        <Day>{dateFrom}</Day>
      </From>
      <RoutePath>
        <TotalWrap>
          <AirIcon src={airUp} />
          <Total>
            Всего: <Duration duration={trip.timeOfFlight} />
          </Total>
          <AirIcon src={airDown} />
        </TotalWrap>
        <Snippet>
          <Dot src={dot} /> <Line src={line} /> <Dot src={dot} />
        </Snippet>
        <RouteAirPorts>
          <AirAbbreviation>{trip.airportFrom}</AirAbbreviation>
          <AirAbbreviation>{trip.airportTo}</AirAbbreviation>
        </RouteAirPorts>
      </RoutePath>
      <To>
        <Clock>
          <Pin src={pin} alt="Булавка" />
          <Time> {landingAt} </Time>
        </Clock>
        <City>{localization.city[trip.cityTo]}</City>
        <Day>{dateTo}</Day>
      </To>
    </Wrapper>
  );
};

Trip.propTypes = {
  data: PropTypes.shape({
    cityFrom: PropTypes.string.isRequired,
    cityTo: PropTypes.string.isRequired,
    airportFrom: PropTypes.string.isRequired,
    airportTo: PropTypes.string.isRequired,
    timeOfFlight: PropTypes.number.isRequired,
  }).isRequired,
};

export default Trip;
