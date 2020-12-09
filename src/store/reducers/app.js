import { SET_VIDEOS, SEARCH_VIDEO_TYPE } from '../action-types/app';

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
                videos: payload
            }
        }
        case SEARCH_VIDEO_TYPE: {
            return {
                searchVideoType: payload
            }
        }
        default:
            return state
    }
}
