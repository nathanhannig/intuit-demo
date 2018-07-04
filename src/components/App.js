import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import Container from './Container';
import ContactsContainer from './ContactsContainer';
import ContactsRow from './ContactsRow';
import Contact from './Contact';

class App extends Component {
  componentDidMount() {
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Title>
            Contact List
          </Title>
        </Header>
        <Container>
          <ContactsContainer>
            <ContactsRow>
              <Contact
                name="Jane Doe"
                phone="1-514-555-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
              <Contact
                name="John Doe"
                phone="1-514-555-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
              <Contact
                name="Bob Smith"
                phone="1-414-517-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
            </ContactsRow>
            <ContactsRow>
              <Contact
                name="Jane Doe"
                phone="1-414-517-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
              <Contact
                name="Bob Smith"
                phone="1-414-517-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
              <Contact
                name="Bob Smith"
                phone="1-414-517-1809"
                address="6481 Reflection Dr #206 San Diego, CA 92124"
              />
            </ContactsRow>
          </ContactsContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
