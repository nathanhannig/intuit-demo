import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInformation = styled.div`
margin-left: 18px;
padding: 12px;
flex: 1;
`;

const Information = ({ children, className }) => (
  <StyledInformation className={className}>
    {children}
  </StyledInformation>
);

Information.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Information.defaultProps = {
  className: undefined,
};

export default Information;
