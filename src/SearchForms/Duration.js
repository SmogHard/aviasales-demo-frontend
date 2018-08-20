import React from 'react';
import PropTypes from 'prop-types';
import Formatted from 'react-intl-formatted-duration';

import styled from 'styled-components';

const Text = styled.span``;

const Duration = ({ duration }) => (
  <Formatted seconds={duration * 60} textComponent={Text} format="extra_short" />
);

Duration.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Duration;
