import youTubeConfig from '../configs/youtube.config';
import { setVideos } from '../store/actions/app';
import store from '../store';

const AppController = {};


AppController.init = async () => {
    AppController.searchVideosFromYouTube(store.getState().app.searchVideoType)
    console.log('==> ==> ==>', store.getState().app.searchVideoType)

}
AppController.getVideosFromYouTube = async () => {

}

AppController.searchVideosFromYouTube = async (search) => {
    const url = youTubeConfig.apiUrl(search);
    const res = await fetch(url)
    const response = await res.json();

    if(!response.items){

        return
    }
// reducer//dispatch//{type: "SET_VIDEOS", payload: response.item}
    store.dispatch(setVideos(response.items))
    // await `https://www.youtube.com/embed/${response.items[0].id.videoId}`
    //response.items[0].id.videoId
}


export default AppController;