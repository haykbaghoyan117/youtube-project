import { SET_VIDEOS, SET_SEARCH_VIDEO_TEXT } from '../action-types/app';

export const setVideos = payload => ({type: SET_VIDEOS, payload});
export const setSearchVideoText = payload => ({ type: SET_SEARCH_VIDEO_TEXT, payload });