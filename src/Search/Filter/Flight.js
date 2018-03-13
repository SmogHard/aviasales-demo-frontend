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

const data = {
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

  handleDepartureChange = (value, direction) => {
    this.setState(prevState => ({
      [direction]: {
        departureFrom: value[0],
        departureTo: value[1],
        arrivalFrom: prevState[direction].arrivalFrom,
        arrivalTo: prevState[direction].arrivalTo,
      },
    }));
  };

  handleArrivalChange = (value, direction) => {
    this.setState(prevState => ({
      [direction]: {
        departureFrom: prevState[direction].departureFrom,
        departureTo: prevState[direction].departureTo,
        arrivalFrom: value[0],
        arrivalTo: value[1],
      },
    }));
  };

  clearChange = () => {
    this.setState({
      to: data.to,
      from: data.from,
    });
  };

  render() {
    return (
      <Wrapper>
        <Filter
          isOpen
          title="Время вылета и прибытия"
          isVisibleClear={this.props.isRangeChanged(this.state, data)}
          onClearClick={() => this.clearChange()}
        >
          <Fragment>
            <Title>
              Москва <Air src={air} alt="Самолет" /> Барселона
            </Title>
            <RangeDate
              title="Вылет из Москвы:"
              startDate={this.state.to.departureFrom}
              endDate={this.state.to.departureTo}
              min={data.to.departureFrom}
              max={data.to.departureTo}
              value={[this.state.to.departureFrom, this.state.to.departureTo]}
              defaultValue={[data.to.departureFrom, data.to.departureTo]}
              onChange={value => this.handleDepartureChange(value, 'to')}
            />
            <RangeDate
              title="Прибытие в Барселону:"
              startDate={this.state.to.arrivalFrom}
              endDate={this.state.to.arrivalTo}
              min={data.to.arrivalFrom}
              max={data.to.arrivalTo}
              value={[this.state.to.arrivalFrom, this.state.to.arrivalTo]}
              defaultValue={[data.to.arrivalFrom, data.to.arrivalTo]}
              onChange={value => this.handleArrivalChange(value, 'to')}
            />
            <Title>
              Барселона <Air src={air} alt="Самолет" /> Москва
            </Title>
            <RangeDate
              title="Вылет из Барселоны:"
              startDate={this.state.from.departureFrom}
              endDate={this.state.from.departureTo}
              min={data.from.departureFrom}
              max={data.from.departureTo}
              value={[this.state.from.departureFrom, this.state.from.departureTo]}
              defaultValue={[data.from.departureFrom, data.from.departureTo]}
              onChange={value => this.handleDepartureChange(value, 'from')}
            />
            <RangeDate
              title="Прибытие в Москву:"
              startDate={this.state.from.arrivalFrom}
              endDate={this.state.from.arrivalTo}
              min={data.from.arrivalFrom}
              max={data.from.arrivalTo}
              value={[this.state.from.arrivalFrom, this.state.from.arrivalTo]}
              defaultValue={[data.from.arrivalFrom, data.from.arrivalTo]}
              onChange={value => this.handleArrivalChange(value, 'from')}
            />
          </Fragment>
        </Filter>
      </Wrapper>
    );
  }
}

Flight.propTypes = { isRangeChanged: PropTypes.func.isRequired };
