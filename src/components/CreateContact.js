import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Formik } from 'formik';
import Section from './Section';
import Row from './Row';
import Button from './Button';
import Input from './Input';
import { createContact } from '../actions';

const Title = styled.h1`
margin: 10px 0;
width: 100%;
max-width: 991px;
flex: 1;
color: #676a6c;
font-size: 140%;
`;

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

const CreateContact = ({ onCloseCreate, dispatchCreate }) => {
  const handleCloseCreate = () => {
    onCloseCreate();
  };

  const handleCreateContact = (values) => {
    dispatchCreate(values);
    handleCloseCreate();
  };

  return (
    <Section center>
      <Title>
        Create contact
      </Title>
      <p>
        Fill the form below to create a new contact.
      </p>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          nickname: '',
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
        onSubmit={handleCreateContact}
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
              <Button onClick={handleCloseCreate}>
                Cancel
              </Button>
              <Button primary type="submit" disabled={isSubmitting}>
                Create
              </Button>
            </Row>
          </form>
        )}
      />
    </Section>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchCreate: contact => dispatch(createContact(contact)),
  };
}

export default connect(null, mapDispatchToProps)(CreateContact);
