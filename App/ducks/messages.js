import { omit } from '../lib';

// actions
const REMOVE_ALL = 'messages/REMOVE_ALL';
const REMOVE_FROM = 'messages/REMOVE_FROM';

// action creators
export const removeMessagesAll = () => ({
  type: REMOVE_ALL
});
export const removeMessagesFrom = username => ({
  type: REMOVE_FROM,
  username
});

// reducer
export default function(state = {}, action = {}) {
  switch (action.type) {
    case REMOVE_FROM:
      return omit(state, action.username);
    case REMOVE_ALL:
      return {};
    default:
      return state;
  }
}
