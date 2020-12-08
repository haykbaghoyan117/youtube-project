import { SET_VIDEOS } from '../action-types/app';
const initialState = {
    videos: [
        {id:{videoId: "TlbnGSMJQbQ"}},
        {id:{videoId: "Mygvqddopj4"}},
        {id:{videoId: "iDaM21svwec"}}
    ]
};

export default (state = initialState, { type, payload }) => {
    switch (type) {


        case SET_VIDEOS: {
            return {
                ...state,
                videos: payload
            }
        }
        default:
            return state
    }
}
