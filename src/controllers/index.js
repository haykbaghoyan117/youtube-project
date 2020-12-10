import youTubeConfig from '../configs/youtube.config';
import { setVideos } from '../store/actions/app';
import store from '../store';

const AppController = {};


AppController.init = async () => {
    AppController.searchVideosFromYouTube(store.getState().app.searchVideoType)
}

AppController.searchVideosFromYouTube = async (search) => {
    const url = youTubeConfig.apiUrl(search);
    const res = await fetch(url)
    const response = await res.json();

    if(!response.items){
        return alert(response.error.message)
    }
    store.dispatch(setVideos(response.items))

}


export default AppController;