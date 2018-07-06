import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
padding: 0.5em;
margin: 0.5em 0;
width: 100%;
color: #000;
background-color: #ddd;
border: 1px solid #bbb;
border-radius: 3px;

${({ disabled }) => disabled && css`
  background-color: #f3f3f4;
  border: none;
`}
`;

const Input = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledInput className={className} {...otherProps}>
      {children}
    </StyledInput>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Input;
