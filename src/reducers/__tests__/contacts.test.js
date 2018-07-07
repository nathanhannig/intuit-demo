import reducer from '../contacts';
import { CONTACT_CREATE, CONTACT_UPDATE, CONTACT_DELETE } from '../../actions/types';

it('handles actions of type CONTACT_CREATE', () => {
  const contact = {
    '123-4567-890': {
      name: 'Test User 1',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'User 1',
    },
  };

  const initialState = {};

  const action = {
    type: CONTACT_CREATE,
    payload: contact,
  };

  const newState = reducer(initialState, action);

  // Check that reducer is pure function and
  // did not mutate parameters
  expect(action).toBe(action);
  expect(contact).toBe(contact);

  // Check that state has changed
  expect(newState).not.toBe(initialState);

  // Check the state has the correct data
  expect(newState).toEqual(contact);
});

it('handles actions of type CONTACT_UPDATE', () => {
  const contact = {
    '123-4567-890': {
      name: 'Test User 1 Updated',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'User 1',
    },
  };

  const initialState = {
    '123-4567-890': {
      name: 'Test User 1',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'User 1',
    },
  };

  const action = {
    type: CONTACT_UPDATE,
    payload: contact,
  };

  const newState = reducer(initialState, action);

  // Check that reducer is pure function and
  // did not mutate parameters
  expect(action).toBe(action);
  expect(contact).toBe(contact);

  // Check that state has changed
  expect(newState).not.toBe(initialState);

  // Check the state has the correct data
  expect(newState).toEqual(contact);
});

it('handles actions of type CONTACT_DELETE', () => {
  const contactId = '123-4567-890';

  const initialState = {
    '123-4567-890': {
      name: 'Test User 1',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'User 1',
    },
  };

  const action = {
    type: CONTACT_DELETE,
    payload: contactId,
  };

  const newState = reducer(initialState, action);

  // Check that reducer is pure function and
  // did not mutate parameters
  expect(action).toBe(action);
  expect(contactId).toBe(contactId);

  // Check that state has changed
  expect(newState).not.toBe(initialState);

  // Check the state has the correct data
  expect(newState).toEqual({});
});

it('handles action with unknown type', () => {
  const initialState = {};
  const action = {};

  const newState = reducer(initialState, action);

  // Check that reducer is pure function and
  // did not mutate parameters
  expect(action).toBe(action);

  // Check that state hasn't changed
  expect(newState).toBe(initialState);
});
