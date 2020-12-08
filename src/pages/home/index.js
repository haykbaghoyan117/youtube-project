import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersVideos } from "../../firebase/firestore";
import { Button } from 'reactstrap';
import AppController from '../../controllers';
import { constructYouTubeIframeUrl} from '../../helpers'

class Home extends Component {
    state = {
        videos: null,
        likedVideos : []
    }
    componentDidMount() {
        AppController.init()
        // getVideosList().then(res => this.setState({ videos: res }))
        this.props.user && getUsersVideos(this.props.user.email).then(res => console.log(res))
    }
    // componentDidUpdate(prevProps, prevState) {
    //     if (!deepEqual(this.props.user, prevProps.user) && this.props.user) {
    //         getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
    //     }
    // }
    checkLiked = (id) => {
    //    return !!(this.state?.likedVideos.find(e => id === e))
    }

    render() {
        // // console.log("eee-->",this.state.likedVideos)
        const { videos } = this.props;
        return (
            <div className='row  d-flex justify-content-between'>
                 {
                     videos && (
                         <>
                             {videos.map((elem, index) => {
                                 // console.log(this.checkLiked(elem.id))
                                 return (
                                     <div className='col-2 d-flex flex-column m-3'>
                                         <iframe key={index} title="link" src={constructYouTubeIframeUrl(elem.id.videoId)} />
                                         { this.props.user && <Button color="success" disabled={this.checkLiked(elem.id)}>like</Button>}
                                     </div>
                                 )
                             })}
                         </>
                     )  
                 }
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