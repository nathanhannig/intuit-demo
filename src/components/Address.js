import React from 'react';
import styled from 'styled-components';

const StyledAddress = styled.div`
`;

const Address = ({ children, className }) => (
  <StyledAddress className={className}>
    {children}
  </StyledAddress>
);

export default Address;
