import React, { Component } from 'react';
import VideoList from '../video-list/video-list';

class HomePage extends Component {

    state = {
        hasAccount: true
    }

    searchAccount = () => {

    }

    render() {
        const { hasAccount } = this.state;
        return(
            <div>
                {
                    hasAccount ?
                    (
                        <div>
                            <input type='button' value='Profile' />
                            <input type='button' value='LogOut' />
                            <VideoList />
                        </div>
                    )
                    :
                    (
                        <div>
                            <input type='button' value='LogIn' />
                            <input type='button' value='Registration' />
                            <VideoList />
                        </div>
                    )
                }

            </div>
        )
    }
};

export default HomePage;