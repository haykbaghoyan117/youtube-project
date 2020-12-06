import * as actionTypes from '../action-types/user';

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.SET_USER: {
        return payload;
    }
    case actionTypes.CLEAR_USER: {
        return null;
    }
    default:
        return state
    }
}
