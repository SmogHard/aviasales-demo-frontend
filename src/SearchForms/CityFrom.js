import React from 'react';
import PropTypes from 'prop-types';
import { withClickOutside } from 'react-clickoutside';
import styled from 'styled-components';
import arrow from './arrow.svg';
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
  right: 43px;
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

const ButtonAction = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 18px;
  right: 16px;
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

const CitiesWithOutside = withClickOutside()(Cities);

const DropDown = ({
  cities,
  data,
  handleCityChange,
  handleChange,
  handleSwap,
  isOpen,
  onClickOutside,
}) => (
  <Wrapper>
    <CityFrom>
      <Input
        type="text"
        name="from"
        placeholder="Город вылета"
        value={data.city}
        onChange={event => handleChange(event, 'depart', 'departIsOpen')}
      />
      <Abbreviation>{data.abbr}</Abbreviation>
      <ButtonAction onClick={handleSwap}>
        <img alt="Направление" src={arrow} />
      </ButtonAction>
    </CityFrom>
    {isOpen && (
      <CitiesWithOutside onClickOutside={() => onClickOutside('departIsOpen')}>
        {cities.map((direction, idx) => (
          <City
            key={direction.id}
            striped={idx}
            onClick={() => handleCityChange('depart', idx, 'departIsOpen')}
          >
            <CityName>{localization.city[direction.city]}, </CityName>
            <Country> {localization.country[direction.country]}</Country>
            <Airport>{direction.abbr}</Airport>
          </City>
        ))}
      </CitiesWithOutside>
    )}
  </Wrapper>
);

DropDown.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  data: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSwap: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
};

export default DropDown;
