import youTubeConfig from '../configs/youtube.config'
import { setVideos } from '../store/actions/app';
import store from '../store'
const AppController = {};


AppController.init = async () => {
    AppController.searchVideosFromYouTube("team lead")
}
AppController.getVideosFromYouTube = async () => {

}

AppController.searchVideosFromYouTube = async (searchString) => {
    const url = youTubeConfig.apiUrl(searchString);
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