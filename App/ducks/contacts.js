import { omit } from '../lib';

// actions
const ADD = 'contacts/ADD';
const REMOVE = 'contacts/REMOVE';

// action creators
export const addContact = username => ({
  type: ADD,
  username
});
export const removeContact = username => ({
  type: REMOVE,
  username
});

// default to empty object
const defaultState = {};

// reducer
export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD:
      // just add the username as a key for now
      return {
        ...state,
        [action.username]: {}
      };
    case REMOVE:
      return omit(state, action.username);
    default:
      return state;
  }
}
