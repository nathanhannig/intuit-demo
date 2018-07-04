import React from 'react';
import styled from 'styled-components';

const StyledContactsRow = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;

const ContactsRow = ({ children, className }) => (
  <StyledContactsRow className={className}>
    {children}
  </StyledContactsRow>
);

export default ContactsRow;
