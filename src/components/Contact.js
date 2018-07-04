import React from 'react';
import styled from 'styled-components';
import DisplayInitial from './DisplayInitial';
import Information from './Information';
import Name from './Name';
import Nickname from './Nickname';
import Phone from './Phone';
import Address from './Address';

// Creating a Styled instance for use of hover on Wrapper
const StyledDisplayInitial = styled(DisplayInitial)``;

const Wrapper = styled.div`
margin: 0px;
padding: 15px;
width: 100%;
display: flex;
flex: 1;
justify-content: center;
align-items: center;
border: solid 1px #ddd;

&:hover {
  cursor: pointer;
  background: #fff;
  transition: background-color .2s;
}

&:hover > ${StyledDisplayInitial} {
  background: #d52a30;
  background: repeating-linear-gradient(
    45deg,
    #e32d33,
    #e32d33 10px,
    #d52a30 10px,
    #d52a30 20px
  );
  transition: background .2s;
};

@media (min-width: 992px) {
  margin: 10px;
  height: 150px;
}
`;

const Contact = ({
  name, nickname, phone, email, address,
}) => (
  <Wrapper>
    <StyledDisplayInitial>
      {name[0]}
    </StyledDisplayInitial>
    <Information>
      <Name>
        {name}
      </Name>
      <Phone>
        {phone}
      </Phone>
    </Information>
  </Wrapper>
);

export default Contact;
