import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin: 10px;
  width: 100%;
  max-width: 991px;
  flex: 1;
  color: #fff;
  font-size: 140%;
`;

const Title = ({ children, className }) => (
  <StyledTitle className={className}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  className: undefined,
};

export default Title;
