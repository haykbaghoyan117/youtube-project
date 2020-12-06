import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideosList, getUsersVideos } from "../../firebase/firestore";
import { Button } from 'reactstrap';
import deepEqual from 'fast-deep-equal'

class Home extends Component {
    state = {
        videos: null,
        likedVideos : []
    }
    componentDidMount() {
        getVideosList().then(res => this.setState({ videos: res }))
        this.props.user && getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (!deepEqual(this.props.user, prevProps.user) && this.props.user) {
            getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
        }
    }
    checkLiked = (id) => {
       return !!(this.state.likedVideos.find(e => id === e.videoId))
    }

    render() {
        console.log(this.state.likedVideos)
        const { videos } = this.state;
        return (
            <div>
                {
                    videos && (
                        <>
                            {videos.map((elem, index) => {
                                console.log(this.checkLiked(elem.id))
                                return (
                                    <div>
                                        <iframe key={index} title="link" src={elem.url} />
                                        { this.props.user && <Button  color="success" disabled={this.checkLiked(elem.id)}>like</Button>}
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
    user: state.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)