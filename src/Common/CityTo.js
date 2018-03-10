import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { localization } from '../Search/Tickets/data';

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

const CityFrom = styled.div`
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
  padding-bottom: 16px;
  z-index: 99999;
  background: #ffffff;
  box-shadow: -2px 1px 2px rgba(74, 74, 74, 0.2), 0px 1px 4px rgba(74, 74, 74, 0.2);
`;

const Wrapper = styled.div`
  position: relative;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #4a4a4a;

  ${City}:hover & {
    color: #ffffff;
  }

  @media (min-width: 1200px) {
    width: 33%;
  }
`;

const Country = styled.span`
  color: #a0b0b9;
  font-size: 14px;
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${City}:hover & {
    color: #ffffff;
  }

  @media (min-width: 1200px) {
    width: 33%;
  }
`;

const Airport = styled.span`
  color: #a0b0b9;
  font-size: 14px;
  position: absolute;
  right: 18px;

  ${City}:hover & {
    color: #ffffff;
  }
`;

const DropDown = ({
  cities, data, handleCityChange, handleChange,
}) => (
  <Wrapper>
    <CityFrom>
      <Input
        type="text"
        name="to"
        placeholder="Город прибытия"
        value={data.city}
        onChange={event => handleChange(event, 'to')}
      />
      <Abbreviation>{data.abbr}</Abbreviation>
    </CityFrom>
    {data.isOpen && (
      <Cities>
        {cities.map((item, idx) => (
          <City key={item.id} striped={idx} onClick={() => handleCityChange('to', idx)}>
            <CityName>{localization.city[item.city]}, </CityName>
            <Country> {localization.country[item.country]}</Country>
            <Airport>{item.abbr}</Airport>
          </City>
        ))}
      </Cities>
    )}
  </Wrapper>
);

DropDown.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  data: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
};

export default DropDown;
