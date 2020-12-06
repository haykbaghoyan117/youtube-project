import React, { Component } from 'react';
import * as firebase from 'firebase';
import HomePage from './home-page';

const RegistrationPage = () =>  {
  const { hasAccount } = this.state;
  return (
    <div>
      {
        hasAccount ?
          (
            <div><HomePage /></div>
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
    </div>
  );
}

export default RegistrationPage;