import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';
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
} from './data';

const Wrapper = styled.div`
  display: none;
  @media (min-width: 1200px) {
    display: block;
    background: #ffffff;
  }
`;

const setChecked = (filter, checked) => ({ ...filter, checked });

const getAllChecked = (filter, check) => filter.map(item => setChecked(item, check));

const getChecked = (filter, idx) =>
  filter.map((item, index) => {
    if (idx === index) {
      return { ...item, checked: !item.checked };
    }
    return item;
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

  handleClear = (filter) => {
    this.setState(prevState => ({
      [filter]: getAllChecked(prevState[filter], true),
    }));
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
    }));
  };

  render() {
    return (
      <Wrapper>
        <Transfer
          data={this.state.transfer}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <Flight />
        <Baggage
          data={this.state.baggage}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <DurationOfTransfer />
        <TravelTime />
        <Airlines
          airlines={this.state.airlines}
          alliance={this.state.alliance}
          several={this.state.several}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <Airports
          airportsArrival={this.state.airportsArrival}
          airportsDepart={this.state.airportsDepart}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <AirportOfTransfer
          airportsTransferArrival={this.state.airportsTransferArrival}
          airportsTransferDepart={this.state.airportsTransferDepart}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <Agents
          data={this.state.agents}
          isAllChecked={filter => isAllChecked(filter)}
          handleCheck={(filter, idx) => this.handleCheck(filter, idx)}
          handleClear={filter => this.handleClear(filter)}
          handleAllCheck={this.handleAllCheck}
        />
        <FilterOff handleClearAll={() => this.handleClearAll()} />
      </Wrapper>
    );
  }
}

export default Accordion;
