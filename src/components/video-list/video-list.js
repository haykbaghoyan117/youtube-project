import React, { Component } from 'react';
import VideoListItem from '../video-list-item/video-list-item';
// import { connect } from 'react-redux';
// import { videosLoaded } from '../../actions/index';

export default class VideoList extends Component {
    render() {
        return (
            <VideoListItem />
        )
    }
}

//     componentDidMount = () => {
//         const gandon = this.props;
//         console.log('ggggggggggggg', gandon)
//         // const { profileReducer } = this.props;
//         // const videoStoreService = profileReducer

//         // const data = videoStoreService.getVideos();

//         // this.props.videosLoaded(data)
//     }

//     render() {
//         const xxx = this.props;
//         console.log('xxxxxxxxx', xxx)
//         // const { videos } = this.props;
//         return (
//             <ul>
//                 {
//                     videos.map((video) => {
//                         return (
//                             <div>
//                                 <li key={video.id}>
//                                     <VideoListItem video={video} />
//                                     <input type='button' value='like' disabled='true' />
//                                 </li>
//                             </div>

//                         );
//                     })
//                 }
//             </ul>
//         )
//     }
// };

// const mapStateToProps = ({ profileReducer: {videos} }) => {
//     return {
//         videos
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoList);