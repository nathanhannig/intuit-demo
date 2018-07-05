import React from 'react';
import styled, { css } from 'styled-components';

const StyledSearchBar = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #27AE60;
  border: 2px solid #fff;

  ${({ primary }) => primary && css`
    background: white;
    color: #27AE60;
  `}
`;

const SearchBar = ({ children, className }) => (
  <StyledSearchBar className={className}>
    {children}
  </StyledSearchBar>
);

export default SearchBar;
