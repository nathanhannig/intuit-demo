import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Edit as IconEdit, Delete as IconDelete } from 'styled-icons/material';
import { Formik } from 'formik';
import Section from './Section';
import Row from './Row';
import Button from './Button';
import Input from './Input';
import { updateContact, deleteContact } from '../actions';

const Label = styled.label`
margin: 10px 0;
width: 100%;
flex: 1;
font-size: 120%;
`;

const Error = styled.p`
margin: 0px 0 10px 0;
width: 100%;
max-width: 991px;
font-size: 100%;
color: red;
`;

class EditContact extends Component {
  state = {
    isEdit: false,
  }

  handleEnableEdit = () => {
    this.setState({
      isEdit: true,
    });
  }

  handleClosePage = () => {
    const { onCloseEdit } = this.props;
    this.setState({
      isEdit: false,
    });

    onCloseEdit();
  };

  handleUpdateContact = (values) => {
    const { dispatchUpdate, contactId } = this.props;

    dispatchUpdate(contactId, values);
    this.handleClosePage();
  }

  handleDeleteContact = () => {
    const { dispatchDelete, contactId } = this.props;

    dispatchDelete(contactId);
    this.handleClosePage();
  }

  render() {
    const { isEdit } = this.state;
    const { contact } = this.props;

    return (
      <Section center>
        <Row right>
          {!isEdit && (
            <Button primary onClick={this.handleEnableEdit}>
              <IconEdit size={16} />
              {' '}
              Edit
            </Button>
          )}
          <Button danger onClick={this.handleDeleteContact}>
            <IconDelete size={16} />
            {' '}
            Delete
          </Button>
        </Row>
        <Formik
          initialValues={{
            name: contact.name,
            phone: contact.phone,
            address: contact.address,
            nickname: contact.nickname,
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = 'Required';
            } else if (
              !/^[0-9A-Z].*$/i.test(values.name)
            ) {
              errors.name = 'Invalid name';
            }

            if (!values.phone) {
              errors.phone = 'Required';
            } else if (
              !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone)
            ) {
              errors.phone = 'Invalid phone number';
            }

            return errors;
          }}
          onSubmit={this.handleUpdateContact}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Label htmlFor="name">
                Name:
                  <Input
                    disabled={!isEdit}
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </Label>
              </Row>
              {touched.name && errors.name && (
              <Error>
                {errors.name}
              </Error>
              )}
              <Row>
                <Label htmlFor="phone">
                Phone:
                  <Input
                    disabled={!isEdit}
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </Label>
              </Row>
              {touched.phone && errors.phone && (
              <Error>
                {errors.phone}
              </Error>
              )}
              <Row>
                <Label htmlFor="address">
                Address:
                  <Input
                    disabled={!isEdit}
                    id="address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                </Label>
              </Row>
              {touched.address && errors.address && (
              <Error>
                {errors.address}
              </Error>
              )}
              <Row>
                <Label htmlFor="nickname">
                Nickname:
                  <Input
                    disabled={!isEdit}
                    id="nickname"
                    type="text"
                    name="nickname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nickname}
                  />
                </Label>
              </Row>
              {touched.nickname && errors.nickname && (
              <Error>
                {errors.nickname}
              </Error>
              )}
              <Row right>
                <Button onClick={this.handleClosePage}>
                  Cancel
                </Button>
                {isEdit && (
                  <Button primary type="submit" disabled={isSubmitting}>
                    Save
                  </Button>
                )}
              </Row>
            </form>
          )}
        />
      </Section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchUpdate: (contactId, contact) => dispatch(updateContact(contactId, contact)),
    dispatchDelete: contactId => dispatch(deleteContact(contactId)),
  };
}

export default connect(null, mapDispatchToProps)(EditContact);
