import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin: 0 auto;
max-width: 991px;
background-color: #f3f3f4;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Wrapper = ({ children, className }) => (
  <StyledWrapper className={className}>
    {children}
  </StyledWrapper>
);

export default Wrapper;
