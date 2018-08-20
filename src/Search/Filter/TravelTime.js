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

const data = {
  to: {
    min: 180,
    max: 2700,
  },
  from: {
    min: 170,
    max: 2800,
  },
};

export default class TravelTime extends Component {
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

  handleChange = (value, direction) => {
    this.setState({
      [direction]: {
        min: value[0],
        max: value[1],
      },
    });
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
          title="Время в пути"
          isVisibleClear={this.props.isRangeChanged(this.state, data)}
          onClearClick={() => this.clearChange()}
        >
          <Fragment>
            <Title>
              Москва <Air src={air} alt="Самолет" /> Барселона
            </Title>
            <RangeDuration
              startDate={this.state.to.min}
              endDate={this.state.to.max}
              min={data.to.min}
              max={data.to.max}
              value={[this.state.to.min, this.state.to.max]}
              defaultValue={[this.state.to.min, this.state.to.max]}
              onChange={value => this.handleChange(value, 'to')}
            />
            <Title>
              Барселона <Air src={air} alt="Самолет" /> Москва
            </Title>
            <RangeDuration
              min={data.from.min}
              max={data.from.max}
              startDate={this.state.from.min}
              endDate={this.state.from.max}
              value={[this.state.from.min, this.state.from.max]}
              defaultValue={[this.state.from.min, this.state.from.max]}
              onChange={value => this.handleChange(value, 'from')}
            />
          </Fragment>
        </Filter>
      </Wrapper>
    );
  }
}

TravelTime.propTypes = {
  isRangeChanged: PropTypes.func.isRequired,
};
