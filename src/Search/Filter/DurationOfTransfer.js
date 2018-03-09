import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RangeDuration } from './Range';
import Filter from './Filter';

const Wrapper = styled.div`
  padding: 16px;
  border-top: 1px solid #dddddd;
`;

export default class TravelTime extends Component {
  static defaultProps = {
    minTo: 184,
    maxTo: 2755,
  };

  state = {
    to: {
      min: 184,
      max: 2755,
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

  render() {
    return (
      <Wrapper>
        <Filter title="Длительность пересадки">
          <Fragment>
            <RangeDuration
              startDate={this.state.to.min}
              endDate={this.state.to.max}
              min={this.props.minTo}
              max={this.props.maxTo}
              defaultValue={[this.state.to.min, this.state.to.max]}
              onChange={value => this.handleToChange(value)}
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
};

TravelTime.propTypes = {
  minTo: PropTypes.number,
  maxTo: PropTypes.number,
};
