import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersVideos, likeVideo } from "../../firebase/firestore";
import { Button, Container, Row, Col } from 'reactstrap';

import AppController from '../../controllers';
import { constructYouTubeIframeUrl} from '../../helpers';
import deepEqual from 'fast-deep-equal';
import Spinner from '../../components/spinner';
import { setSearchVideoText } from '../../store/actions/app'

class Home extends Component {
    state = {
        likedVideos : [],
        loaderCondition: false
    }
   async componentDidMount() {
       this.setState({loaderCondition: true})
       await AppController.init()
        this.props.user && await getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }));
        this.setState({loaderCondition:false})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { searchVideoType } = this.props;
        AppController.searchVideosFromYouTube(searchVideoType)
    }

    handleChange = ({ target }) => {
        this.props.setSearchVideoText(target.value)
        // this.setState({ [target.name]: target.value })
    }
    componentDidUpdate(prevProps, prevState) {
        if (!deepEqual(this.props.user, prevProps.user) && this.props.user) {
            getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res, loaderCondition: false }))
        }
    }
    checkLiked = (id) => {
       return this.state.likedVideos.includes(id)
    }
    handleLike = (hash) => async () => {
        await likeVideo(hash);
        this.props.user && getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
    }
    render() {
        if(this.state.loaderCondition){
            return <Spinner />
        }
        // // console.log("eee-->",this.state.likedVideos)
        const { videos, searchVideoType } = this.props;
        return (
            <div>
                <form className='form form-group' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search videos' name='videoType' value={searchVideoType} onChange={this.handleChange} />
                    <button type='submit'>Search</button>
                </form>
                <Container className="themed-container">
                    <Row className="justify-content-between">
                    {
                        videos && (
                            <>
                                {videos.map((elem, index) => {
                                    // console.log(this.checkLiked(elem.id))
                                    return (
                                        <Col key={index} xs="3">
                                            <iframe  title="link" src={constructYouTubeIframeUrl(elem.id.videoId)} />
                                            { this.props.user && <Button color="success" disabled={this.checkLiked(elem.id.videoId)} onClick={this.handleLike(elem.id.videoId)}>like</Button>}
                                        </Col>
                                    )
                                })}
                            </>
                        )  
                    }
                    </Row>
                </Container>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    videos: state.app.videos,
    searchVideoType: state.app.searchVideoType,

})

const mapDispatchToProps = {
    setSearchVideoText
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)