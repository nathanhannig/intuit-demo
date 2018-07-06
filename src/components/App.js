import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Title from './Title';
import Wrapper from './Wrapper';
import CreateContact from './CreateContact';
import EditContact from './EditContact';
import ContactsRow from './ContactsRow';
import Contact from './Contact';
import ShowContacts from './ShowContacts';

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
          <ContactsRow key={id}>
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
            <ShowContacts
              onOpenCreate={this.handleOpenCreate}
              onOpenEdit={this.handleOpenEdit}
              contacts={contacts}
            />
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

App.propTypes = {
  contacts: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
