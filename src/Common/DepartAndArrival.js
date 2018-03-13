import React, { Component } from 'react';
import { withClickOutside } from 'react-clickoutside';
import styled from 'styled-components';
import CityFrom from './CityFrom';
import CityTo from './CityTo';
import { localization } from '../Search/Tickets/data';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WrapperWithOutsie = withClickOutside()(Wrapper);

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

class DepartAndArrival extends Component {
  state = {
    from: {
      city: '',
      abbr: '',
    },
    to: {
      city: '',
      abbr: '',
    },
    departIsOpen: false,
    arrivalIsOpen: false,
  };

  onClickOutside = () => {
    this.setState({
      departIsOpen: false,
      arrivalIsOpen: false,
    });
  };

  handleCityChange = (direction, idx, isOpen) => {
    this.setState({
      [direction]: {
        city: localization.city[data[idx].city],
        abbr: data[idx].abbr,
      },
      [isOpen]: false,
    });
  };

  handleChange = (event, direction, isOpen) => {
    this.setState({
      [direction]: {
        city: event.target.value,
        abbr: '',
      },
      [isOpen]: true,
    });
  };

  handleSwap = () => {
    this.setState(prevState => ({
      from: prevState.to,
      to: prevState.from,
    }));
  };

  render() {
    return (
      <WrapperWithOutsie onClickOutside={this.onClickOutside}>
        <CityFrom
          isOpen={this.state.departIsOpen}
          data={this.state.from}
          cities={data}
          handleChange={this.handleChange}
          handleCityChange={this.handleCityChange}
          handleSwap={this.handleSwap}
        />
        <CityTo
          isOpen={this.state.arrivalIsOpen}
          onClickOutside={this.onClickOutside}
          data={this.state.to}
          cities={data}
          handleChange={this.handleChange}
          handleCityChange={this.handleCityChange}
        />
      </WrapperWithOutsie>
    );
  }
}

export default DepartAndArrival;
