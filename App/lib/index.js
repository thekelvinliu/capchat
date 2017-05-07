// small and simple library functions

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
  omit
};
