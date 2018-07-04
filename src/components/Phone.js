import React from 'react';
import styled from 'styled-components';
import { Phone as Icon } from 'styled-icons/material';

const StyledPhone = styled.p`
margin: 0;
font-size: 100%;
`;

const Phone = ({ children, className }) => (
  <StyledPhone className={className}>
    <Icon size={16} title="Phone Number" />
    {' '}
    {children}
  </StyledPhone>
);

export default Phone;
