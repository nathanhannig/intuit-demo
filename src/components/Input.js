import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
padding: 0.5em;
margin: 0.5em 0;
width: 100%;
color: #000;
background-color: #ddd;
border: none;
border-radius: 3px;
`;

const Input = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledInput className={className} {...otherProps}>
      {children}
    </StyledInput>
  );
};

export default Input;
