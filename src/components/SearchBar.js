import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em auto;
  width: 100%;
  color: #000;
  background-color: #ddd;
  border: 1px solid #bbb;
  border-radius: 3px;
  font-size: 120%;

  @media (min-width: 992px) {
    width: 45%;
  }
`;

const SearchBar = ({
  onTextChange, text, children, className,
}) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search..."
      value={text}
      onChange={handleTextChange}
      className={className}
    >
      {children}
    </Input>
  );
};

SearchBar.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  children: undefined,
  className: undefined,
};

export default SearchBar;
