import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ right }) => right && css`
    justify-content: center;
    align-items: flex-end;
  `}

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    ${({ right }) => right && css`
      justify-content: flex-end;
      align-items: center;
    `}
  }
`;

const Row = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledRow className={className} {...otherProps}>
      {children}
    </StyledRow>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Row.defaultProps = {
  className: undefined,
};

export default Row;
