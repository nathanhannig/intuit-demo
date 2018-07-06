import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledSection = styled.div`
  margin: 1rem 0;
  min-width: 100%;
  background-color: #f3f3f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ center }) => center && css`
    justify-content: center;
  `}

  @media (min-width: 992px) {
    margin: 1rem auto;
    min-width: 65%;
  }
`;

const Section = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <StyledSection className={className} {...otherProps}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  className: undefined,
};

export default Section;
