import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Phone as Icon } from 'styled-icons/material';

const StyledPhone = styled.p`
margin: 0;
color: #676a6c;
font-size: 100%;
`;

const Phone = ({ children, className }) => (
  <StyledPhone className={className}>
    <Icon size={16} title="Phone Number" />
    {' '}
    {children}
  </StyledPhone>
);

Phone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Phone.defaultProps = {
  className: undefined,
};

export default Phone;
