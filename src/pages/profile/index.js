import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfileVideos} from '../../firebase/firestore';

class Profile extends Component {
    state = {
        likedVideos: []
    }
    componentDidMount() {
        this.props.user && getProfileVideos(this.props.user.email).then(res => this.setState({likedVideos:res}))
    }
    
    render() {
       console.log(this.state.likedVideos)
        if(!this.props.user){
            return <h1>Please Sign In or Sign Up</h1>
        }
        return (
            <div>
               {
                   this.state.likedVideos.map(elem => <iframe src={elem.url} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)