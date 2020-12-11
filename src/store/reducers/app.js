import { SET_VIDEOS, SET_SEARCH_VIDEO_TEXT } from '../action-types/app';

const initialState = {
    videos: [
        {id:{videoId: "TlbnGSMJQbQ"}},
        {id:{videoId: "Mygvqddopj4"}},
        {id:{videoId: "iDaM21svwec"}}
    ],
    searchVideoType: 'killdim'
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_VIDEOS: {
            return {
                ...state,
                videos: payload
            }
        }
<<<<<<< HEAD
        case SEARCH_VIDEO_TYPE: {
            if (payload !== '') {
                return {searchVideoType: 'killdim'}
            }
=======
        case SET_SEARCH_VIDEO_TEXT: {
>>>>>>> 4d9b078e3bb961f9bea50307ce9c65181dccce51
            return {
                ...state,
                searchVideoType: payload
            }
        }
        default:
            return state
    }
}
