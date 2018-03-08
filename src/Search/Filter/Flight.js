import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RangeDate } from './Range';
import Filter from './Filter';
import air from './airplane.svg';

const Wrapper = styled.div`
  padding: 16px;
  border-top: 1px solid #dddddd;
`;

const Air = styled.img`
  margin: 0 8px;
`;

const Title = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: #323333;
  margin: 0;
  margin-top: 24px;
`;

export default class Flight extends Component {
  state = {
    to: {
      departureFrom: 1519412700000,
      departureTo: 1519497900000,
      arrivalFrom: 1519412700000,
      arrivalTo: 1519497900000,
    },
    from: {
      departureFrom: 1519412700000,
      departureTo: 1519497900000,
      arrivalFrom: 1519412700000,
      arrivalTo: 1519497900000,
    },
  };

  handleDepartureToChange = (value) => {
    this.setState(prevState => ({
      to: {
        departureFrom: value[0],
        departureTo: value[1],
        arrivalFrom: prevState.to.arrivalFrom,
        arrivalTo: prevState.to.arrivalTo,
      },
    }));
  };

  handleArrivalToChange = (value) => {
    this.setState(prevState => ({
      to: {
        departureFrom: prevState.to.departureFrom,
        departureTo: prevState.to.departureTo,
        arrivalFrom: value[0],
        arrivalTo: value[1],
      },
    }));
  };

  handleDepartureFromChange = (value) => {
    this.setState(prevState => ({
      from: {
        departureFrom: value[0],
        departureTo: value[1],
        arrivalFrom: prevState.from.arrivalFrom,
        arrivalTo: prevState.from.arrivalTo,
      },
    }));
  };

  handleArrivalFromChange = (value) => {
    this.setState(prevState => ({
      from: {
        departureFrom: prevState.from.departureFrom,
        departureTo: prevState.from.departureTo,
        arrivalFrom: value[0],
        arrivalTo: value[1],
      },
    }));
  };

  render() {
    return (
      <Wrapper>
        <Filter isOpen title="Время вылета и прибытия">
          <Fragment>
            <Title>
              Москва <Air src={air} alt="Самолет" /> Барселона
            </Title>
            <RangeDate
              title="Вылет из Москвы:"
              startDate={this.state.to.departureFrom}
              endDate={this.state.to.departureTo}
              min={this.props.departureFrom}
              max={this.props.departureTo}
              defaultValue={[this.props.departureFrom, this.props.departureTo]}
              onChange={value => this.handleDepartureToChange(value)}
            />
            <RangeDate
              title="Прибытие в Барселону:"
              startDate={this.state.to.arrivalFrom}
              endDate={this.state.to.arrivalTo}
              min={this.props.arrivalFrom}
              max={this.props.arrivalTo}
              defaultValue={[this.props.arrivalFrom, this.props.arrivalTo]}
              onChange={value => this.handleArrivalToChange(value)}
            />
            <Title>
              Барселона <Air src={air} alt="Самолет" /> Москва
            </Title>
            <RangeDate
              title="Вылет из Барселоны:"
              startDate={this.state.from.departureFrom}
              endDate={this.state.from.departureTo}
              min={this.props.departureFrom}
              max={this.props.departureTo}
              defaultValue={[this.props.departureFrom, this.props.departureTo]}
              onChange={value => this.handleDepartureFromChange(value)}
            />
            <RangeDate
              title="Прибытие в Москву:"
              startDate={this.state.from.arrivalFrom}
              endDate={this.state.from.arrivalTo}
              min={this.props.arrivalFrom}
              max={this.props.arrivalTo}
              defaultValue={[this.props.arrivalFrom, this.props.arrivalTo]}
              onChange={value => this.handleArrivalFromChange(value)}
            />
          </Fragment>
        </Filter>
      </Wrapper>
    );
  }
}

Flight.defaultProps = {
  departureFrom: 1519412700000,
  departureTo: 1519497900000,
  arrivalFrom: 1519412700000,
  arrivalTo: 1519497900000,
};
Flight.propTypes = {
  departureFrom: PropTypes.number,
  departureTo: PropTypes.number,
  arrivalFrom: PropTypes.number,
  arrivalTo: PropTypes.number,
};
