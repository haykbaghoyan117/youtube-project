// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import Slider from '../Slider/slider';

// class YoutubeVideos extends Component {
  
//   state = {
//     videos : [],
//     likesVideos : []
//   }

  youtubeRandomVideos = async () => {
    const youtube_api_key = "AIzaSyDpPTpWytVM4G-SIzhXj9RuoRnW9TKv2vA";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&channelId=UCCeAaS4K5IOr3n6KUZvN9zA&key=${youtube_api_key}`;
    const res = await fetch(url)
    const response = await res.json()
    return await `https://www.youtube.com/embed/${response.items[0].id.videoId}`
  }
 
  
//   render () {
//     return (
//       <div className='content'>
//       {/* <Slider /> */}
//       <section id="skills" className="site-wrap" tabIndex="2">
//         <div className="write-section">
//           <h4 className="">Random Programming Video</h4>
//           <div className="write-container">
//             <iframe width="100%" height="600px" className="youtubeVideo" src={ this.youtubeRandomVideos } >
//             </iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//     )
//   }
// }


// export default YoutubeVideos