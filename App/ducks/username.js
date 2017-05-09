// actions
const SET = 'username/SET';
const UNSET = 'username/UNSET';

// action creators
export const setUsername = username => ({
  type: SET,
  username
});
export const unsetUsername = () => ({
  type: UNSET
});

// default to null
const defaultState = null;

// export reducer
export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case SET:
      return action.username;
    case UNSET:
      return defaultState;
    default:
      return state;
  }
}
