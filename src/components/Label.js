import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  margin: 10px 0;
  padding: 0 1rem;
  width: 100%;
  flex: 1;
  font-size: 120%;
`;

const Label = ({ children, className }) => (
  <StyledLabel className={className}>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.defaultProps = {
  className: undefined,
};

export default Label;
