// small and simple library functions

// returns true if obj has key
export const contains = (obj, key) => typeof obj[key] !== 'undefined';

// returns a new object with the contents of obj except for key
export const omit = (obj, key) => {
  const {
    [key]: omitted,
    ...retval
  } = obj;
  return retval;
};

// export all by default
export default {
  contains,
  omit
};
