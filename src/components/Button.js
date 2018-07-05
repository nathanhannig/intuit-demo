import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  display: inline-block;
  background-color: #fff;
  color: #27AE60;
  border: 2px solid #27AE60;

  &:hover {
    cursor: pointer;
    background: #ddd;
    transition: background-color .2s;
  }

  ${({ primary }) => primary && css`
    background-color: #27AE60;
    color: #fff;

    &:hover {
      background: #239e57;
    }
  `}

  ${({ danger }) => danger && css`
    background-color: #e32d33;
    border-color: #d52a30;;
    color: #fff;

    &:hover {
      background: #d52a30;
      border-color: #e32d33;;
    }
  `}
`;

const Button = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledButton className={className} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
