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
    abbr: 'MOV',
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

class ChoiseCity extends Component {
  state = {
    from: {
      city: '',
      abbr: '',
      isOpen: false,
    },
    to: {
      city: '',
      abbr: '',
      isOpen: false,
    },
  };

  onClickOutside = () => {
    this.setState(prevState => ({
      from: {
        ...prevState.from,
        isOpen: false,
      },
      to: {
        ...prevState.to,
        isOpen: false,
      },
    }));
  };

  handleCityChange = (direction, idx) => {
    this.setState({
      [direction]: {
        city: localization.city[data[idx].city],
        abbr: data[idx].abbr,
        isOpen: false,
      },
    });
  };

  handleChange = (event, direction) => {
    this.setState({
      [direction]: {
        city: event.target.value,
        abbr: '',
        isOpen: true,
      },
    });
  };

  handleSwap = () => {
    this.setState(prevState => ({
      from: {
        ...prevState.to,
      },
      to: {
        ...prevState.from,
      },
    }));
  };

  render() {
    return (
      <WrapperWithOutsie onClickOutside={this.onClickOutside}>
        <CityFrom
          data={this.state.from}
          cities={data}
          handleChange={(event, direction) => this.handleChange(event, direction)}
          handleCityChange={(direction, idx) => this.handleCityChange(direction, idx)}
          handleSwap={() => this.handleSwap()}
        />
        <CityTo
          onClickOutside={this.onClickOutside}
          data={this.state.to}
          cities={data}
          handleChange={(event, direction) => this.handleChange(event, direction)}
          handleCityChange={(direction, idx) => this.handleCityChange(direction, idx)}
        />
      </WrapperWithOutsie>
    );
  }
}

export default ChoiseCity;
