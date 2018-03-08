import { withClickOutside } from 'react-clickoutside';
import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: none;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const Text = styled.span`
  line-height: 20px;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const Abbreviation = OpacityText.extend`
  position: absolute;
  right: 18px;
  top: 18px;
`;

const CityTo = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }
`;

const Cities = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 57px;
  left: 0;
  z-index: 99999;
  background: #ffffff;
  box-shadow: -2px 1px 2px rgba(74, 74, 74, 0.2), 0px 1px 4px rgba(74, 74, 74, 0.2);
`;

const Wrapper = styled.div`
  position: relative;
`;

const CityFromsOutside = withClickOutside()(Wrapper);

const City = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 15px;
  padding-left: 16px;
  padding-bottom: 15px;
  cursor: pointer;
  background-color: ${props => (props.striped % 2 ? '#f4f4f4' : '#ffffff')};
  &:hover,
  &:focus {
    background-color: #20a6cb;
  }
`;

const CityName = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #4a4a4a;
  ${City}:hover & {
    color: #ffffff;
  }
`;

const Country = styled.span`
  color: #a0b0b9;
  font-size: 14px;
  ${City}:hover & {
    color: #ffffff;
  }
`;

const Airport = Country.extend`
  position: absolute;
  right: 18px;
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

export default class DropDown extends Component {
  state = {
    isOpen: false,
    city: '',
    abbr: '',
  };

  onClickOutside = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      isOpen: true,
      city: event.target.value,
    });
  };

  handleCityChange = (i) => {
    this.setState({
      isOpen: false,
      city: data[i].city,
      abbr: data[i].abbr,
    });
  };

  render() {
    return (
      <CityFromsOutside onClickOutside={this.onClickOutside}>
        <CityTo>
          <Input
            type="text"
            name="from"
            placeholder="Город прибытия"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <Abbreviation>{this.state.abbr}</Abbreviation>
        </CityTo>
        {this.state.isOpen && (
          <Cities>
            {data.map((item, i) => (
              <City key={item.id} striped={i} onClick={() => this.handleCityChange(i)}>
                <CityName>{item.city}, </CityName> <Country> {item.country}</Country>
                <Airport>{item.abbr}</Airport>
              </City>
            ))}
          </Cities>
        )}
      </CityFromsOutside>
    );
  }
}
