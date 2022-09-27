import SET_USER from './types';

export const setUser = data => ({
  type: SET_USER,
  payload: {
    data,
  },
});
