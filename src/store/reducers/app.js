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
        case SET_SEARCH_VIDEO_TEXT: {
            return {
                ...state,
                searchVideoType: payload
            }
        }
        default:
            return state
    }
}
