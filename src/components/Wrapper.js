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

const Wrapper = ({ children, ...props }) => (
  <StyledWrapper {...props}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
