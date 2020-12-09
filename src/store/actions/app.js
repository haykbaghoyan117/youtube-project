import { SET_VIDEOS, SEARCH_VIDEO_TYPE } from '../action-types/app';

export const setVideos = payload => ({type: SET_VIDEOS, payload});
export const searchVideoType = payload => ({ type: SEARCH_VIDEO_TYPE, payload });