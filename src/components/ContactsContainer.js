import React from 'react';
import styled from 'styled-components';

const StyledContactsContainer = styled.div`
  margin: 1rem auto;
  width: 100%;
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactsContainer = ({ children, className }) => (
  <StyledContactsContainer className={className}>
    {children}
  </StyledContactsContainer>
);

export default ContactsContainer;
