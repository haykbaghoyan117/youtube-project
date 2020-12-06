import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ResetPassword from './pages/reset-password';
import Profile from './pages/profile';
import Header from './components/header';
import * as firebase from './firebase/';
import { connect } from 'react-redux';
import * as actions from "./store/actions/user";

class App extends Component {
    componentDidMount() {
        firebase.auth.onAuthStateChanged((authUser) => this.props.setUser(authUser));
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/sign-up' exact component={SignUp} />
                        <Route path='/sign-in' exact component={SignIn} />
                        <Route path='/reset-password' exact component={ResetPassword} />
                        <Route path='/profile' exact component={Profile} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(App)