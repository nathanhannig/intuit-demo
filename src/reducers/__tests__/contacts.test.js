import reducer from '../contacts';
import { CONTACT_CREATE, CONTACT_UPDATE, CONTACT_DELETE } from '../../actions/types';

it('handles actions of type CONTACT_CREATE', () => {
  const action = {
    type: CONTACT_CREATE,
    payload: {
      '123-4567-890': {
        name: 'Nathan Hannig',
        phone: '133-152-9222',
        address: '46090 Ridge Oak Drive',
        nickname: 'Nate',
      },
    },
  };

  const newState = reducer({}, action);

  expect(newState).toEqual({
    '123-4567-890': {
      name: 'Nathan Hannig',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    },
  });
});

it('handles actions of type CONTACT_UPDATE', () => {
  const action = {
    type: CONTACT_UPDATE,
    payload: {
      '123-4567-890': {
        name: 'Joe Smith',
        phone: '133-152-9222',
        address: '46090 Ridge Oak Drive',
        nickname: 'Nate',
      },
    },
  };

  const newState = reducer({
    '123-4567-890': {
      name: 'Nathan Hannig',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    },
  }, action);

  expect(newState).toEqual({
    '123-4567-890': {
      name: 'Joe Smith',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    },
  });
});

it('handles actions of type CONTACT_DELETE', () => {
  const action = {
    type: CONTACT_DELETE,
    payload: '123-4567-890',
  };

  const newState = reducer({
    '123-4567-890': {
      name: 'Nathan Hannig',
      phone: '133-152-9222',
      address: '46090 Ridge Oak Drive',
      nickname: 'Nate',
    },
  }, action);

  expect(newState).toEqual({});
});

it('handles action with unknown type', () => {
  const newState = reducer({}, {});

  expect(newState).toEqual({});
});
