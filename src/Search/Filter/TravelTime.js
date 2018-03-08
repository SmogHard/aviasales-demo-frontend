import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RangeDuration } from './Range';
import air from './airplane.svg';
import Filter from './Filter';

const Wrapper = styled.div`
  padding: 16px;
  border-top: 1px solid #dddddd;
`;

const Title = styled.h3`
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: #323333;
  margin: 0;
  margin-top: 24px;
`;

const Air = styled.img`
  margin: 0 8px;
`;

function step(min, max) {
  return (max - min) / 1000;
}

export default class TravelTime extends Component {
  static defaultProps = {
    minTo: 180,
    maxTo: 2700,
    minFrom: 170,
    maxFrom: 2800,
  };

  state = {
    to: {
      min: 180,
      max: 2700,
    },
    from: {
      min: 170,
      max: 2800,
    },
  };

  handleToChange = (value) => {
    this.setState({
      to: {
        min: value[0],
        max: value[1],
      },
    });
  };

  handleFromChange = (value) => {
    this.setState({
      from: {
        min: value[0],
        max: value[1],
      },
    });
  };

  render() {
    return (
      <Wrapper>
        <Filter isOpen title="Время в пути">
          <Fragment>
            <Title>
              Москва <Air src={air} alt="Самолет" /> Барселона
            </Title>
            <RangeDuration
              startDate={this.state.to.min}
              endDate={this.state.to.max}
              min={this.props.minTo}
              max={this.props.maxTo}
              defaultValue={[this.state.to.min, this.state.to.max]}
              onChange={value => this.handleToChange(value)}
              step={step(this.props.minTo, this.props.maxTo)}
            />
            <Title>
              Барселона <Air src={air} alt="Самолет" /> Москва
            </Title>
            <RangeDuration
              min={this.props.minFrom}
              max={this.props.maxFrom}
              startDate={this.state.from.min}
              endDate={this.state.from.max}
              defaultValue={[this.state.from.min, this.state.from.max]}
              onChange={value => this.handleFromChange(value)}
              step={step(this.props.minFrom, this.props.maxFrom)}
            />
          </Fragment>
        </Filter>
      </Wrapper>
    );
  }
}

TravelTime.defaultProps = {
  minTo: 180,
  maxTo: 2700,
  minFrom: 170,
  maxFrom: 2800,
};

TravelTime.propTypes = {
  minTo: PropTypes.number,
  maxTo: PropTypes.number,
  minFrom: PropTypes.number,
  maxFrom: PropTypes.number,
};
