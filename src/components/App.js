import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Add as IconCreate } from 'styled-icons/material';
import Header from './Header';
import Title from './Title';
import Wrapper from './Wrapper';
import Section from './Section';
import Row from './Row';
import CreateContact from './CreateContact';
import EditContact from './EditContact';
import Button from './Button';
import ContactsRow from './ContactsRow';
import Contact from './Contact';


class App extends Component {
  state = {
    showCreate: false,
    showEdit: false,
    activeContactId: '',
  }

  handleOpenCreate = () => {
    this.setState({ showCreate: true });
  }

  handleCloseCreate = () => {
    this.setState({ showCreate: false });
  }

  handleOpenEdit = (contactId) => {
    this.setState({
      showEdit: true,
      activeContactId: contactId,
    });
  }

  handleCloseEdit = () => {
    this.setState({
      showEdit: false,
      activeContactId: '',
    });
  }

  renderContacts = () => {
    const { contacts } = this.props;

    const contactsList = [];
    let contactsRow = [];

    Object.keys(contacts).forEach((id, index) => {
      contactsRow.push((
        <Contact
          key={id}
          contactId={id}
          name={contacts[id].name}
          nickname={contacts[id].nickname}
          phone={contacts[id].phone}
          address={contacts[id].address}
          onOpenEdit={this.handleOpenEdit}
        />
      ));

      // Wrap ContactsRow around every sets of 3 Contact
      // components or around the last set
      if ((index + 1) % 3 === 0
        || index === Object.keys(contacts).length - 1) {
        contactsList.push((
          <ContactsRow key={index}>
            {[...contactsRow]}
          </ContactsRow>
        ));

        contactsRow = [];
      }
    });

    return contactsList;
  }

  render() {
    const { showCreate, showEdit, activeContactId } = this.state;
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <Header>
          <Title>
            Contact List
          </Title>
        </Header>
        <Wrapper>
          { !showCreate && !showEdit && (
          <Section>
            <Row right>
              <Button primary onClick={this.handleOpenCreate}>
                <IconCreate size={16} />
                {' '}
                Create
              </Button>
            </Row>
            {this.renderContacts()}
          </Section>
          )}
          { showCreate && (
            <CreateContact
              onCloseCreate={this.handleCloseCreate}
            />
          )}
          { showEdit && (
            <EditContact
              contactId={activeContactId}
              contact={contacts[activeContactId]}
              onCloseEdit={this.handleCloseEdit}
            />
          )}
        </Wrapper>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

export default connect(mapStateToProps)(App);
