import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home-page';
import RegistrationPage from '../pages/registration-page';
import * as firebase from 'firebase';
import './app.css';

class App extends Component {

  state = {
    email: '',
    password: '',
    hasAccount: false,
    likeVideos: []
  };

  componentDidMount() {
    const db = firebase.database();
    // // console.log(db);
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value
    });
  };

  createAccount = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        // console.log(response.user);
        this.setState({ hasAccount: true })
      })
      .catch(error => console.log(error))

  }

  // createAccount = () => {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(error => // console.log(error))
  // };



   // return (
  //   <div>
  //     {
  //       hasAccount ?
  //         (
  //           <div><HomePage /></div>
  //         )
  //         :
  //         (
  //           <div>
  //             <input type='text' id='email' placeholder='email' onChange={this.handleChange} />
  //             <input type='password' id='password' placeholder='passwod' onChange={this.handleChange} />
  //             <input type='submit' onClick={this.createAccount} />
  //           </div>
  //         )
  //     }
  //   </div>
  // );




  render () {
      const { hasAccount } = this.state;
      return (
        <Switch>
        {
            hasAccount ?
              (
                <div><Route path='/home' component={ HomePage } /></div>
              )
              :
              (
                <div>
                  <input type='text' id='email' placeholder='email' onChange={this.handleChange} />
                  <input type='password' id='password' placeholder='passwod' onChange={this.handleChange} />
                  <input type='submit' onClick={this.createAccount} />
                </div>
              )
          }
      );
        {/* <Route path='/' component={ RegistrationPage } exact />
        <Route path='/home' component={ HomePage } /> */}
      </Switch>
    );
  };
};

export default App;

// import { createStore } from 'redux'
// import reducer from './reducers/index'

// const store = createStore(reducer)
// // console.log(store.getState())
// // {
// //   counter: 0,
// //   todos: []
// // }

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Use Redux'
// })
// // console.log(store.getState())
// // {
// //   counter: 0,
// //   todos: [ 'Use Redux' ]
// // }