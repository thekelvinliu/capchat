import { omit } from '../lib';

// actions
const ADD_CONTACT = 'contacts/ADD_CONTACT';
const REMOVE_CONTACT = 'contacts/REMOVE_CONTACT';

// action creators
export const addContact = username => ({
  type: ADD_CONTACT,
  username
});
export const removeContact = username => ({
  type: REMOVE_CONTACT,
  username
});

// default to empty object
const defaultState = {};

// reducer
export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_CONTACT:
      // just add the username as a key for now
      return {
        ...state,
        [action.username]: {}
      };
    case REMOVE_CONTACT:
      return omit(state, action.username);
    default:
      return state;
  }
}
