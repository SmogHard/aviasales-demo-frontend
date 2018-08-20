import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';
import Transfer from './Transfer';
import Flight from './Flight';
import Baggage from './Baggage';
import DurationOfTransfer from './DurationOfTransfer';
import Airports from './Airports';
import AirportOfTransfer from './AirportOfTransfer';
import Agents from './Agents';
import TravelTime from './TravelTime';
import Airlines from './Airlines';
import FilterOff from './FilterOff';
import {
  transfer,
  baggage,
  agents,
  alliance,
  airlines,
  several,
  airportsArrival,
  airportsDepart,
  airportsTransferArrival,
  airportsTransferDepart,
  durationOfTransfer,
} from './data';

const Wrapper = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    background: #ffffff;
  }
`;

const setChecked = (filter, checked) => ({ ...filter, checked });

const getAllChecked = (filter, check) => filter.map(data => setChecked(data, check));

const getChecked = (filter, idx) =>
  filter.map((data, index) => {
    if (idx === index) {
      return { ...data, checked: !data.checked };
    }
    return data;
  });

const isAllChecked = filter => filter.every(el => el.checked);

class Accordion extends Component {
  state = {
    transfer: cloneDeep(transfer),
    baggage: cloneDeep(baggage),
    agents: cloneDeep(agents),
    alliance: cloneDeep(alliance),
    airlines: cloneDeep(airlines),
    several: cloneDeep(several),
    airportsArrival: cloneDeep(airportsArrival),
    airportsDepart: cloneDeep(airportsDepart),
    airportsTransferArrival: cloneDeep(airportsTransferArrival),
    airportsTransferDepart: cloneDeep(airportsTransferDepart),
    durationOfTransfer: cloneDeep(durationOfTransfer),
  };

  handleAllCheck = (filter) => {
    this.setState(prevState => ({
      [filter]: getAllChecked(prevState[filter], !isAllChecked(prevState[filter])),
    }));
  };

  handleCheck = (filter, idx) => {
    this.setState(prevState => ({
      [filter]: getChecked(prevState[filter], idx),
    }));
  };

  handleClear = (...args) => {
    this.setState(prevState =>
      args.reduce(
        (filter, name) => ({ ...filter, [name]: getAllChecked(prevState[name], true) }),
        {},
      ));
  };

  isRangeChanged = (rangeChanged, defaultRange) => !isEqual(rangeChanged, defaultRange);

  clearChangeRange = () => {
    this.setState({
      durationOfTransfer: cloneDeep(durationOfTransfer),
    });
  };

  handleChangeRange = (value) => {
    this.setState({
      durationOfTransfer: {
        min: value[0],
        max: value[1],
      },
    });
  };

  handleClearAll = () => {
    this.setState(prevState => ({
      transfer: getAllChecked(prevState.transfer, true),
      baggage: getAllChecked(prevState.baggage, true),
      agents: getAllChecked(prevState.agents, true),
      alliance: getAllChecked(prevState.alliance, true),
      airlines: getAllChecked(prevState.airlines, true),
      several: getAllChecked(prevState.several, true),
      airportsArrival: getAllChecked(prevState.airportsArrival, true),
      airportsDepart: getAllChecked(prevState.airportsDepart, true),
      airportsTransferArrival: getAllChecked(prevState.airportsTransferArrival, true),
      airportsTransferDepart: getAllChecked(prevState.airportsTransferDepart, true),
      durationOfTransfer: cloneDeep(durationOfTransfer),
    }));
  };

  render() {
    return (
      <Wrapper>
        <Transfer
          data={this.state.transfer}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <Flight isRangeChanged={this.isRangeChanged} />
        <Baggage
          data={this.state.baggage}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <DurationOfTransfer
          isRangeChanged={this.isRangeChanged}
          clearChangeRange={this.clearChangeRange}
          duration={this.state.durationOfTransfer}
          handleChangeRange={this.handleChangeRange}
        />
        <TravelTime isRangeChanged={this.isRangeChanged} />
        <Airlines
          airlines={this.state.airlines}
          alliance={this.state.alliance}
          several={this.state.several}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <Airports
          airportsArrival={this.state.airportsArrival}
          airportsDepart={this.state.airportsDepart}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <AirportOfTransfer
          airportsTransferArrival={this.state.airportsTransferArrival}
          airportsTransferDepart={this.state.airportsTransferDepart}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <Agents
          data={this.state.agents}
          isAllChecked={isAllChecked}
          handleCheck={this.handleCheck}
          handleClear={this.handleClear}
          handleAllCheck={this.handleAllCheck}
        />
        <FilterOff handleClearAll={this.handleClearAll} />
      </Wrapper>
    );
  }
}

export default Accordion;
