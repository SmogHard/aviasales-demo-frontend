import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
import styled from 'styled-components';
import Formatted from 'react-intl-formatted-duration';
import 'rc-slider/assets/index.css';
import './range.css';

const formatDate = (date) => {
  if (date) return format(date, 'HH:mm, D MMM', { locale: ruLocale });
  return undefined;
};

const RangeContainer = styled.div`
  margin-top: 12px;
  font-size: 12x;
  line-height: 18pxrem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Text = styled.span``;

const Title = styled.span`
  line-height: 18px;
  font-size: 12px;
  color: rgb(50, 51, 51);
  margin: 0px 0px 4px;
`;

const Date = Title.extend`
  margin: 0;
`;

const DurationFormat = ({ duration }) => (
  <Formatted seconds={duration * 60} textComponent={Text} format="extra_short" />
);

DurationFormat.propTypes = {
  duration: PropTypes.number.isRequired,
};

export const RangeFilter = ({
  title, startText, endText, max, min, ...rest
}) => (
  <RangeContainer>
    <Title>{title}</Title>
    <Wrapper>
      <Date>{startText}</Date>
      <Date>{endText}</Date>
    </Wrapper>
    <Range min={min} max={max} {...rest} />
  </RangeContainer>
);

RangeFilter.defaultProps = {
  title: '',
  startText: '',
  endText: '',
};

RangeFilter.propTypes = {
  title: PropTypes.string,
  startText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  endText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export const RangeDate = ({ startDate, endDate, ...rest }) => (
  <RangeFilter
    {...rest}
    startText={`c ${formatDate(startDate)}`}
    endText={`до ${formatDate(endDate)}`}
  />
);

RangeDate.propTypes = {
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};

export const RangeDuration = ({
  startDate, endDate, min, max, ...rest
}) => (
  <RangeFilter
    {...rest}
    startText={
      <Fragment>
        от <DurationFormat duration={startDate} />
      </Fragment>
    }
    endText={
      <Fragment>
        до <DurationFormat duration={endDate} />
      </Fragment>
    }
    min={min}
    max={max}
  />
);

RangeDuration.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};
