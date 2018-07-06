import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
margin: 0 auto;
max-width: 991px;
background-color: #f3f3f4;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Wrapper = ({ children, className }) => (
  <StyledWrapper className={className}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  className: undefined,
};

export default Wrapper;
