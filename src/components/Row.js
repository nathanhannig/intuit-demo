import React from 'react';
import styled, { css } from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${({ right }) => right && css`
    justify-content: flex-end;
  `}
`;

const Row = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledRow className={className} {...otherProps}>
      {children}
    </StyledRow>
  );
};

export default Row;
