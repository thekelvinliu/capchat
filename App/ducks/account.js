// actions
const SET_USERNAME = 'account/SET_USERNAME';
const REMOVE_ACCOUNT = 'account/REMOVE_ACCOUNT';

// action creators
export const setUsername = username => ({
  type: SET_USERNAME,
  username
});
export const removeAccount = () => ({
  type: REMOVE_ACCOUNT
});

// reducer
export default function(state = {}, action = {}) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case REMOVE_ACCOUNT:
      return {};
    default:
      return state;
  }
}
