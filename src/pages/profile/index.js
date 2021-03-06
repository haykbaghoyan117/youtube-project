import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { getUsersVideos, deleteVideo } from '../../firebase/firestore';
import { constructYouTubeIframeUrl } from '../../helpers';
import deepEqual from 'fast-deep-equal';


class Profile extends Component {
    state = {
        likedVideos: []
    }
    componentDidMount() {
        this.props.user && getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (!deepEqual(this.props.user, prevProps.user) && this.props.user) {
            getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
        }
    }

    handleCancelLike = (hash) => async () => {
        await deleteVideo(hash);
        await getUsersVideos(this.props.user.email).then(res => this.setState({ likedVideos: res }))
    }
    render() {
        if (!this.props.user) {
            return <h1>Please Sign In or Sign Up</h1>
        }
        return (
            <div>
                {
                    this.state.likedVideos.map(elem => (
                        <div key={elem}>
                            <iframe src={constructYouTubeIframeUrl(elem)} title="s" />
                            <button onClick={this.handleCancelLike(elem)}> cancel </button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,

})

const mapDispatchToProps = {

}
Profile.propTypes = {
    user: PropTypes.object,

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)