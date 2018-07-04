import React from 'react';
import styled from 'styled-components';

const StyledInformation = styled.div`
margin-left: 18px;
padding: 12px;
flex: 1;
`;

const Information = ({ children, className }) => (
  <StyledInformation className={className}>
    {children}
  </StyledInformation>
);

export default Information;
