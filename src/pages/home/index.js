import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersVideos, likeVideo } from "../../firebase/firestore";
import { Button } from 'reactstrap';
import AppController from '../../controllers';
import { constructYouTubeIframeUrl} from '../../helpers';
import deepEqual from 'fast-deep-equal';

class Home extends Component {
    state = {
        videos: null,
        likedVideos : [],
        videoType: ''
    }
    componentDidMount() {
        AppController.init()
        // getVideosList().then(res => this.setState({ videos: res }))
        this.props.user && getUsersVideos(this.props.user.email).then(res => this.setState(res))
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { videoType } = this.state;
        AppController.searchVideosFromYouTube(videoType)
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (!deepEqual(this.props.user, prevProps.user) && this.props.user) {
            getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
        }
    }
    checkLiked = (id) => {
        console.log('--->', this.state.likedVideos, id)
        console.log('----->', (this.state?.likedVideos.find(e => id === e)))
       return !!(this.state?.likedVideos.find(e => id === e))
    }
    handleLike = (hash) => () => {
        likeVideo(hash)
    }
    render() {
        // // console.log("eee-->",this.state.likedVideos)
        const { videos } = this.props;
        return (
            <div>
                <form className='form form-group' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search videos' name='videoType' value={this.state.videoType} onChange={this.handleChange} />
                    <button type='submit'>Search</button>
                </form>
                <div className='row  d-flex justify-content-between'>
                    {
                        videos && (
                            <>
                                {videos.map((elem, index) => {
                                    // console.log(this.checkLiked(elem.id))
                                    return (
                                        <div className='col-2 d-flex flex-column m-3'>
                                            <iframe key={index} title="link" src={constructYouTubeIframeUrl(elem.id.videoId)} />
                                            { this.props.user && <Button color="success" disabled={this.checkLiked(elem.id.videoId)} onClick={this.handleLike(elem.id.videoId)}>like</Button>}
                                        </div>
                                    )
                                })}
                            </>
                        )  
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    videos: state.app.videos

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)