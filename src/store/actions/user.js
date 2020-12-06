import * as actionTypes from '../action-types/user';

export const setUser = (user) => ({ type: actionTypes.SET_USER, payload: user });
export const clearUser = () => ({ type: actionTypes.CLEAR_USER })