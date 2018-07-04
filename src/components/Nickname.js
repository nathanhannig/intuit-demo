import React from 'react';
import styled from 'styled-components';

const StyledNickname = styled.div`
`;

const Nickname = ({ children, className }) => (
  <StyledNickname className={className}>
    {children}
  </StyledNickname>
);

export default Nickname;
