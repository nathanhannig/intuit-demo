import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledName = styled.p`
margin: 0 0 12px 0;
padding: 0;
color: #3382bd;
font-size: 120%;
`;

const Name = ({ children, className }) => (
  <StyledName className={className}>
    {children}
  </StyledName>
);

Name.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Name.defaultProps = {
  className: undefined,
};

export default Name;
