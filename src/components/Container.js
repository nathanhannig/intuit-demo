import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
margin: 0 auto;
max-width: 991px;
background-color: #f3f3f4;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Container = ({ children, className }) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
);

export default Container;
