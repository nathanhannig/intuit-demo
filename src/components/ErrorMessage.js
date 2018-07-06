import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
margin: 0px 1rem 10px 1rem;
width: 100%;
max-width: 991px;
font-size: 100%;
color: red;
`;

const ErrorMessage = ({ children, className }) => (
  <StyledErrorMessage className={className}>
    {children}
  </StyledErrorMessage>
);

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ErrorMessage.defaultProps = {
  className: undefined,
};

export default ErrorMessage;
