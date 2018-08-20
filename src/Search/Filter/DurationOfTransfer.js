import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RangeDuration } from './Range';
import Filter from './Filter';

const Wrapper = styled.div`
  padding: 16px;
  border-top: 1px solid #dddddd;
`;

const initial = {
  min: 184,
  max: 2755,
};

const DurationOfTransfer = ({
  duration, isRangeChanged, clearChangeRange, handleChangeRange,
}) => (
  <Wrapper>
    <Filter
      title="Длительность пересадки"
      isVisibleClear={isRangeChanged(duration, initial)}
      onClearClick={clearChangeRange}
    >
      <Fragment>
        <RangeDuration
          startDate={duration.min}
          endDate={duration.max}
          min={initial.min}
          max={initial.max}
          value={[duration.min, duration.max]}
          defaultValue={[duration.min, duration.max]}
          onChange={value => handleChangeRange(value)}
        />
      </Fragment>
    </Filter>
  </Wrapper>
);

DurationOfTransfer.propTypes = {
  duration: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  isRangeChanged: PropTypes.func.isRequired,
  clearChangeRange: PropTypes.func.isRequired,
  handleChangeRange: PropTypes.func.isRequired,
};

export default DurationOfTransfer;
