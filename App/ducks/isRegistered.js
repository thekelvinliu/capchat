// actions
const COMPLETE = 'registration/COMPLETE';
const RESET = 'registration/RESET';

// action creators
export const completeRegistration = () => ({
  type: COMPLETE
});
export const resetRegistration = () => ({
  type: RESET
});

// default to false
const defaultState = false;

// export reducer
export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case COMPLETE:
      return true;
    case RESET:
      return false;
    default:
      return state;
  }
}
