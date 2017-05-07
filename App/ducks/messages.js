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

// returns a new object with the contents of obj except for key
const omit = (obj, key) => {
  const {
    [key]: omitted,
    ...retval
  } = obj;
  return retval;
};

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
