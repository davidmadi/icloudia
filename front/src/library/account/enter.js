import React, { Component } from 'react';
import Login from './login';
import Signup from './signup';

export default class Enter extends Component {
  render() {
    return (

        <div className="c-form-container section-container section-container-image-bg">
	        <div className="container">
            <div className="row">
              LOGO
            </div>
            <div className="row">
              <Login />
              <Signup />
            </div>
          </div>
        </div>
    );
  }
}
