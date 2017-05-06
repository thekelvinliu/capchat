// actions
const SET_USERNAME = 'account/SET_USERNAME';

// action creators
export const setUsername = username => ({
  type: SET_USERNAME,
  username
});

// reducer
export default function(state = {}, action = {}) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
}
