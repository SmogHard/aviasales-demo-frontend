import { withClickOutside } from 'react-clickoutside';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import pluralize from 'pluralize-ru';
import styled from 'styled-components';
import Counter from './Counter';
import Checkbox from './Checkbox';

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  margin: 1px;
`;

const ButtonPassenger = styled.button`
  border: none;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 0px;
  padding-left: 16px;
  width: 100%;
  display: flex;
  line-height: 20px;
  align-items: center;
  position: relative;
  background: transparent;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    line-height: 0;
    height: 0;
    border: 5px transparent solid;
    border-top-color: #262626;
    position: absolute;
    right: 18px;
    top: 25px;
  }
`;

const Text = styled.span`
  line-height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 85%;
  text-align: left;
`;

const OpacityText = Text.extend`
  color: #a0b0b9;
`;

const SelectPassenger = InputWrapper.extend`
  position: relative;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 0px;
  }
  @media (min-width: 1200px) {
    border-top-right-radius: 2px;
  }
`;

const Options = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 57px;
  left: 0;
  background: #ffffff;
  box-shadow: -2px 1px 2px rgba(74, 74, 74, 0.2), 0px 1px 4px rgba(74, 74, 74, 0.2);
`;

const Bussines = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #dddddd;
`;

const OptionsWithOutside = withClickOutside()(Options);

export default class DropDown extends Component {
  handleCheck = () => {
    this.props.handleChangeGrade();
  };

  render() {
    return (
      <SelectPassenger>
        <ButtonPassenger type="button" onClick={this.props.onToogle}>
          <Text>
            {pluralize(
              this.props.passenger,
              'нет пассажиров',
              '%d пассажир',
              '%d пассажира',
              '%d пассажиров',
            )}, <OpacityText>{this.props.bussines ? 'бизнес' : 'эконом'}</OpacityText>
          </Text>
        </ButtonPassenger>
        {this.props.isOpen && (
          <OptionsWithOutside onClickOutside={() => this.props.onClickOutside('isOpenPassenger')}>
            <Counter
              text="Взрослые"
              passenger={this.props.passenger}
              count={this.props.adults}
              counter="adults"
              onChange={this.props.handleCount}
            />
            <Counter
              text="Дети до 12 лет"
              passenger={this.props.passenger}
              count={this.props.kids}
              counter="kids"
              onChange={this.props.handleCount}
            />
            <Counter
              passenger={this.props.passenger}
              text="Дети до 2 лет"
              count={this.props.baby}
              counter="baby"
              noSeat
              onChange={this.props.handleCount}
            />
            <Bussines>
              <Checkbox
                check={this.props.category.checked}
                label={this.props.category.label}
                onChange={this.handleCheck}
              />
            </Bussines>
          </OptionsWithOutside>
        )}
      </SelectPassenger>
    );
  }
}

DropDown.propTypes = {
  passenger: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  kids: PropTypes.number.isRequired,
  baby: PropTypes.number.isRequired,
  bussines: PropTypes.bool.isRequired,
  onToogle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleChangeGrade: PropTypes.func.isRequired,
  handleCount: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  category: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
